/**
 * WordPress dependencies
 */
import {
	createJSONResponse,
	setUpResponseMocking,
	visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { useExperimentalFeatures } from '../../experimental-features';
import menuItemsFixture from './fixtures/menu-items-response-fixture.json';

const menusFixture = [
	{
		name: 'Test Menu 1',
		slug: 'test-menu-1',
	},
	{
		name: 'Test Menu 2',
		slug: 'test-menu-2',
	},
	{
		name: 'Test Menu 3',
		slug: 'test-menu-3',
	},
];

// Matching against variations of the same URL encoded and non-encoded
// produces the most reliable mocking.
const REST_MENUS_ROUTES = [
	'/__experimental/menus',
	`rest_route=${ encodeURIComponent( '/__experimental/menus' ) }`,
];
const REST_MENU_ITEMS_ROUTES = [
	'/__experimental/menu-items',
	`rest_route=${ encodeURIComponent( '/__experimental/menu-items' ) }`,
];

/**
 * Determines if a given URL matches any of a given collection of
 * routes (extressed as substrings).
 *
 * @param {string} reqUrl the full URL to be tested for matches.
 * @param {Array} routes array of strings to match against the URL.
 */
function matchUrlToRoute( reqUrl, routes ) {
	return routes.some( ( route ) => reqUrl.includes( route ) );
}

function getEndpointMocks( matchingRoutes, responsesByMethod ) {
	return [ 'GET', 'POST', 'DELETE', 'PUT' ].reduce( ( mocks, restMethod ) => {
		if ( responsesByMethod[ restMethod ] ) {
			return [
				...mocks,
				{
					match: ( request ) =>
						matchUrlToRoute( request.url(), matchingRoutes ) &&
						request.method() === restMethod,
					onRequestMatch: createJSONResponse(
						responsesByMethod[ restMethod ]
					),
				},
			];
		}

		return mocks;
	}, [] );
}

function assignMockMenuIds( menus ) {
	return menus.length
		? menus.map( ( menu, index ) => ( {
				...menu,
				id: index + 1,
		  } ) )
		: [];
}

function getMenuMocks( responsesByMethod ) {
	return getEndpointMocks( REST_MENUS_ROUTES, responsesByMethod );
}

function getMenuItemMocks( responsesByMethod ) {
	return getEndpointMocks( REST_MENU_ITEMS_ROUTES, responsesByMethod );
}

async function visitNavigationEditor() {
	const query = addQueryArgs( '', {
		page: 'gutenberg-navigation',
	} );
	await visitAdminPage( '/admin.php', query );
}

async function getSerializedBlocks() {
	return page.evaluate( () =>
		wp.blocks.serialize( wp.data.select( 'core/block-editor' ).getBlocks() )
	);
}

describe( 'Navigation editor', () => {
	useExperimentalFeatures( [ '#gutenberg-navigation' ] );

	afterEach( async () => {
		await setUpResponseMocking( [] );
	} );

	it( 'allows creation of a menu when there are no current menu items', async () => {
		const menuPostResponse = {
			id: 4,
			description: '',
			name: 'Main Menu',
			slug: 'main-menu',
			meta: [],
			auto_add: false,
		};

		// Initially return nothing from the menu and menuItem endpoints
		await setUpResponseMocking( [
			...getMenuMocks( { GET: [] } ),
			...getMenuItemMocks( { GET: [] } ),
		] );
		await visitNavigationEditor();

		// Wait for the header to show that no menus are available.
		await page.waitForXPath( '//h3[.="Create your first menu"]', {
			visible: true,
		} );

		// Prepare the menu endpoint for creating a menu.
		await setUpResponseMocking( [
			...getMenuMocks( {
				GET: [ menuPostResponse ],
				POST: menuPostResponse,
			} ),
			...getMenuItemMocks( { GET: [] } ),
		] );

		await page.keyboard.type( 'Main Menu' );
		const createMenuButton = await page.waitForXPath(
			'//button[contains(., "Create menu")]'
		);
		await createMenuButton.click();

		// A snackbar will appear when menu creation has completed.
		await page.waitForXPath( '//div[contains(., "Menu created")]' );

		// Select the navigation block and create a block from existing pages.
		const navigationBlock = await page.waitForSelector(
			'div[aria-label="Block: Navigation"]'
		);
		await navigationBlock.click();

		const addAllPagesButton = await page.waitForXPath(
			'//button[contains(., "Add all pages")]'
		);
		await addAllPagesButton.click();

		// When the block is created the root element changes from a div (for the placeholder)
		// to a nav (for the navigation itself). Wait for this to happen.
		await page.waitForSelector( 'nav[aria-label="Block: Navigation"]' );

		expect( await getSerializedBlocks() ).toMatchSnapshot();
	} );

	it( 'allows creation of a menu when there are existing menu items', async () => {
		const menuPostResponse = {
			id: 4,
			description: '',
			name: 'New Menu',
			slug: 'new-menu',
			meta: [],
			auto_add: false,
		};

		await setUpResponseMocking( [
			...getMenuMocks( {
				GET: assignMockMenuIds( menusFixture ),
				POST: menuPostResponse,
			} ),
			...getMenuItemMocks( { GET: menuItemsFixture } ),
		] );
		await visitNavigationEditor();

		// Wait for the header to show the menu name.
		await page.waitForXPath( '//h2[contains(., "Editing: Test Menu 1")]', {
			visible: true,
		} );

		// Open up the menu creation dialog and create a new menu.
		const switchMenuButton = await page.waitForXPath(
			'//button[.="Switch menu"]'
		);
		await switchMenuButton.click();

		const createMenuButton = await page.waitForXPath(
			'//button[.="Create a new menu"]'
		);
		await createMenuButton.click();

		const menuNameInputLabel = await page.waitForXPath(
			'//form//label[.="Menu name"]'
		);
		await menuNameInputLabel.click();

		await setUpResponseMocking( [
			...getMenuMocks( {
				GET: assignMockMenuIds( [
					...menusFixture,
					{ name: 'New menu', slug: 'new-menu' },
				] ),
				POST: menuPostResponse,
			} ),
			...getMenuItemMocks( { GET: [] } ),
		] );

		await page.keyboard.type( 'New menu' );
		await page.keyboard.press( 'Enter' );

		// A snackbar will appear when menu creation has completed.
		await page.waitForXPath( '//div[contains(., "Menu created")]' );

		// An empty navigation block will appear.
		await page.waitForSelector( 'div[aria-label="Block: Navigation"]' );

		expect( await getSerializedBlocks() ).toMatchSnapshot();
	} );

	it( 'displays the first menu from the REST response when at least one menu exists', async () => {
		await setUpResponseMocking( [
			...getMenuMocks( { GET: assignMockMenuIds( menusFixture ) } ),
			...getMenuItemMocks( { GET: menuItemsFixture } ),
		] );
		await visitNavigationEditor();

		// Wait for the header to show the menu name.
		await page.waitForXPath( '//h2[contains(., "Editing: Test Menu 1")]', {
			visible: true,
		} );

		// Wait for the block to be present.
		await page.waitForSelector( 'nav[aria-label="Block: Navigation"]' );

		expect( await getSerializedBlocks() ).toMatchSnapshot();
	} );

	it( 'shows a submenu when a link is selected and hides it when clicking the editor to deselect it', async () => {
		await setUpResponseMocking( [
			...getMenuMocks( { GET: assignMockMenuIds( menusFixture ) } ),
			...getMenuItemMocks( { GET: menuItemsFixture } ),
		] );
		await visitNavigationEditor();

		// Select a link block with nested links in a submenu.
		const parentLinkXPath =
			'//li[@aria-label="Block: Link" and contains(.,"WordPress.org")]';
		const linkBlock = await page.waitForXPath( parentLinkXPath );
		await linkBlock.click();

		// There should be a submenu link visible.
		//
		// Submenus are hidden using `visibility: hidden` and shown using
		// `visibility: visible` so the visible/hidden options must be used
		// when selecting the elements.
		const submenuLinkXPath = `${ parentLinkXPath }//li[@aria-label="Block: Link"]`;
		const submenuLinkVisible = await page.waitForXPath( submenuLinkXPath, {
			visible: true,
		} );
		expect( submenuLinkVisible ).toBeDefined();

		// click in the top left corner of the canvas.
		const canvas = await page.$( '.edit-navigation-layout__canvas' );
		const boundingBox = await canvas.boundingBox();
		await page.mouse.click( boundingBox.x + 5, boundingBox.y + 5 );

		// There should be a submenu in the DOM, but it should be hidden.
		const submenuLinkHidden = await page.waitForXPath( submenuLinkXPath, {
			hidden: true,
		} );
		expect( submenuLinkHidden ).toBeDefined();
	} );
} );
