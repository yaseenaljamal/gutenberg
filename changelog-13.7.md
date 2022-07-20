
## Changelog

### Enhancements
- Update the modal design. ([40781](https://github.com/WordPress/gutenberg/pull/40781))
- Themes: Adds text decoration support to post title block. ([42328](https://github.com/WordPress/gutenberg/pull/42328))
- Social Link: Automatically prepend emails with mailto protocol. ([42186](https://github.com/WordPress/gutenberg/pull/42186))
- Add better ARIA labels to toggle buttons in Summary panel. ([42114](https://github.com/WordPress/gutenberg/pull/42114))
- Start with featured image in media placeholder. ([41722](https://github.com/WordPress/gutenberg/pull/41722))


#### Components
- ColorPicker: Widen hex input field for mobile. ([42004](https://github.com/WordPress/gutenberg/pull/42004))
- ComboboxControl / FormTokenField: Add flag for larger default size. ([40746](https://github.com/WordPress/gutenberg/pull/40746))
- Try tabs instead of segmented control for switching between solid/gradient in color panels. ([41937](https://github.com/WordPress/gutenberg/pull/41937))

#### Document Settings
- Make Post Format, Slug and Author fields fill the sidebar. ([42146](https://github.com/WordPress/gutenberg/pull/42146))
- Post Template: Update fallback label. ([42063](https://github.com/WordPress/gutenberg/pull/42063))
- Rewrite URL (Permalink) panel as a popover. ([42033](https://github.com/WordPress/gutenberg/pull/42033))

#### Full Site Editing
- Expand the templates that can be added - custom taxonomies, specific term, specific category and tag. ([41875](https://github.com/WordPress/gutenberg/pull/41875))
- Expand the templates that can be added - specific pages. ([42138](https://github.com/WordPress/gutenberg/pull/42138))
- List View: Use heading content for button label text if available. ([41855](https://github.com/WordPress/gutenberg/pull/41855))
- Add New - Custom/General template. ([42127](https://github.com/WordPress/gutenberg/pull/42127))
- Add the 'Apply to inner blocks' option to Block locking ([41876](https://github.com/WordPress/gutenberg/pull/41876))
- Update: Wording on add generic template modal. ([42379](https://github.com/WordPress/gutenberg/pull/42379))

#### Post Editor
- Add estimated time to read to table of contents in editor. ([41611](https://github.com/WordPress/gutenberg/pull/41611))
- Add month and day as a suggest format to the date format picker. ([42317](https://github.com/WordPress/gutenberg/pull/42317))
- Post Editor: Preload templates post type permissions (REST-API). ([42209](https://github.com/WordPress/gutenberg/pull/42209))

### New APIs

- JS Error Tracking: Allow custom error reporting logic to be called in Error Boundaries via a WP action hook. ([42024](https://github.com/WordPress/gutenberg/pull/42024))

### Accessibility 

- Add aria-checked to the selected heading level menu item. ([42273](https://github.com/WordPress/gutenberg/pull/42273))
- Fix tabbing from first or last block in site editor. ([42036](https://github.com/WordPress/gutenberg/pull/42036))
- Navigation block: Only focus submenu trigger on escape key press. ([41986](https://github.com/WordPress/gutenberg/pull/41986))
- Change the BoxControl ARIA role from region to group. ([42094](https://github.com/WordPress/gutenberg/pull/42094))
- Update site editor region labels to match post editor. ([42037](https://github.com/WordPress/gutenberg/pull/42037))

### Bug Fixes

- Enable `shift` in URLPopover component. ([42214](https://github.com/WordPress/gutenberg/pull/42214))
- Multi-selection: Fix select all in Safari. ([42340](https://github.com/WordPress/gutenberg/pull/42340))
- Playwright: Fix relative URLs. ([42361](https://github.com/WordPress/gutenberg/pull/42361))
- Document Settings: Fix tooltip appearing when opening popovers in Summary panel. ([42381](https://github.com/WordPress/gutenberg/pull/42381))
- MediaReplaceFlow: Fix UI showing stale URL by avoiding state duplication. ([42116](https://github.com/WordPress/gutenberg/pull/42116))
- Template Mode: Allow clearing name field while typing. ([42065](https://github.com/WordPress/gutenberg/pull/42065))
- Navigation: Prevent title and href props from being rendered as HTML attributes. ([41833](https://github.com/WordPress/gutenberg/pull/41833))
- Recurse into conditional CSS rules for Editor iframe stylesheets. ([41110](https://github.com/WordPress/gutenberg/pull/41110))

#### Block Library
- Comment template: Left, center and right alignments. ([41892](https://github.com/WordPress/gutenberg/pull/41892))
- Comments block: Remove stray legacy class from edit. ([42335](https://github.com/WordPress/gutenberg/pull/42335))
- Filter out images with no local id before loading media library. ([42083](https://github.com/WordPress/gutenberg/pull/42083))
- Fix undo trap in Gallery block when transforming from shortcode. ([42001](https://github.com/WordPress/gutenberg/pull/42001))
- Remove sticky posts setting when we inherit the query. ([40656](https://github.com/WordPress/gutenberg/pull/40656))
- Social Links: Set the default protocol to 'https' if not specified. ([42167](https://github.com/WordPress/gutenberg/pull/42167))

#### Components
- Add missing label to border radius range control. ([42118](https://github.com/WordPress/gutenberg/pull/42118))
- ComboboxControl: Use custom prefix when generating the instanceId. ([42134](https://github.com/WordPress/gutenberg/pull/42134))
- Popover: Pass missing anchor ref to the getAnchorRect callback prop. ([42076](https://github.com/WordPress/gutenberg/pull/42076))
- [Popover]: Fix regression of inbetween inserter in site editor. ([42329](https://github.com/WordPress/gutenberg/pull/42329))

#### Block Editor
- Fix Link Control 'Open in new tab' option not saving properly on committing link in buttons block. ([42073](https://github.com/WordPress/gutenberg/pull/42073))
- Fix list view drop indicator positioning. ([42353](https://github.com/WordPress/gutenberg/pull/42353))
- Make sure comments keep their location when inside paragraph. ([31374](https://github.com/WordPress/gutenberg/pull/31374))
- Handle cases when getBlockType returns undefined. ([41884](https://github.com/WordPress/gutenberg/pull/41884))

#### Site Editor
- Allow clearing template name field while typing. ([42149](https://github.com/WordPress/gutenberg/pull/42149))
- Template Parts: Disable block transformations. ([42090](https://github.com/WordPress/gutenberg/pull/42090))
- Update template details browse label. ([42350](https://github.com/WordPress/gutenberg/pull/42350))
- Fix pattern carousel / grid styling regression. ([42194](https://github.com/WordPress/gutenberg/pull/42194))

#### Global Styles
- Filter block level styles before compiling global stylesheet. ([42207](https://github.com/WordPress/gutenberg/pull/42207))
- Fix link element hover bleeding into button element default styles. ([42072](https://github.com/WordPress/gutenberg/pull/42072))

#### Post Editor
- Editor: Fix term selector component exports. ([41784](https://github.com/WordPress/gutenberg/pull/41784))
- Post Template: Fix condition checks. ([42038](https://github.com/WordPress/gutenberg/pull/42038))

#### Build Tooling
- Tests: Ignore test files in `build-types` folder. ([42260](https://github.com/WordPress/gutenberg/pull/42260))
- Fix: IsEditedPostAutosaveable test case. ([42280](https://github.com/WordPress/gutenberg/pull/42280))

### Performance
- Work on refactor away from Lodash to reduce build size continued

### Documentation
- Add support for @ignore in the docgen tool. ([42198](https://github.com/WordPress/gutenberg/pull/42198))
- Button Component readme :  Suggest label in case there is not text. ([40639](https://github.com/WordPress/gutenberg/pull/40639))
- New handbook page for curating the editor experience. ([42022](https://github.com/WordPress/gutenberg/pull/42022))
- Rename Templates page to Block Templates. ([42276](https://github.com/WordPress/gutenberg/pull/42276))
- Gutenberg Data Tutorial 5: Adding a Delete Button. ([40940](https://github.com/WordPress/gutenberg/pull/40940))
- Added new FAQ on disabling caching of theme.json. ([42346](https://github.com/WordPress/gutenberg/pull/42346))
- Update link to sample code in gutenberg-examples. ([42208](https://github.com/WordPress/gutenberg/pull/42208))
- Add @example for getNotices to create example in the handbook. ([42023](https://github.com/WordPress/gutenberg/pull/42023))
- Add examples for all actions/selectors for the @wordpress/notice package. ([42077](https://github.com/WordPress/gutenberg/pull/42077))
- Update versions in WordPress for upcoming 6.0.1 release. ([42161](https://github.com/WordPress/gutenberg/pull/42161))
- Fix code blocks for Block Transforms API. ([42287](https://github.com/WordPress/gutenberg/pull/42287))
- Fix formatting problems with curating handbook page. ([42135](https://github.com/WordPress/gutenberg/pull/42135))
- Fix link to meta box example. ([42293](https://github.com/WordPress/gutenberg/pull/42293))
- Update attributes example: Alter source children. ([41016](https://github.com/WordPress/gutenberg/pull/41016))

#### npm publishing workflow
- Simplify workflow with GitHub Actions ([42189](https://github.com/WordPress/gutenberg/pull/42189))
- Update details related to npm publishing. ([42364](https://github.com/WordPress/gutenberg/pull/42364))

### Experiments
- Add a `WP_Style_Engine_CSS_Declarations` object. ([42043](https://github.com/WordPress/gutenberg/pull/42043))
- Style engine: Rename 'css_var' option property to 'convert_vars_to_classnames'. ([42113](https://github.com/WordPress/gutenberg/pull/42113))
- Style engine: Return declarations in array response. ([42307](https://github.com/WordPress/gutenberg/pull/42307))
- Layout: Use semantic classnames, centralize layout definitions, reduce duplication, and fix blockGap in theme.json. ([40875](https://github.com/WordPress/gutenberg/pull/40875))

### Code Quality
- Block Editor: Use optional chaining in 'block-list' component. ([42068](https://github.com/WordPress/gutenberg/pull/42068))
- Blocks: Remove no longer used Block Content Context. ([41395](https://github.com/WordPress/gutenberg/pull/41395))
- Chore: Remove two empty unrequired object destructuring. ([42279](https://github.com/WordPress/gutenberg/pull/42279))
- Fix fix. ([42160](https://github.com/WordPress/gutenberg/pull/42160))
- Fix: Inexistent parameter passed to getBlockIndex on getBlockInsertionPoint. ([42250](https://github.com/WordPress/gutenberg/pull/42250))
- Fix: State type in automaticChangeStatus reducer. ([42251](https://github.com/WordPress/gutenberg/pull/42251))
- Style engine: Add unit test coverage for WP_Style_Engine_CSS_Declarations. ([42306](https://github.com/WordPress/gutenberg/pull/42306))
- Style engine: Rename main public function to reflect functionality. ([42140](https://github.com/WordPress/gutenberg/pull/42140))
- Update: Remove repeated and condition on useElevation. ([42048](https://github.com/WordPress/gutenberg/pull/42048))
- useSelect: Use useDebugValue to better display data in DevTools. ([42225](https://github.com/WordPress/gutenberg/pull/42225))

#### Migration to Typescript
- Grid: Convert component to TypeScript. ([41923](https://github.com/WordPress/gutenberg/pull/41923))
- HStack: Convert component to TypeScript. ([41580](https://github.com/WordPress/gutenberg/pull/41580))
- RangeControl: Convert component to TypeScript. ([40535](https://github.com/WordPress/gutenberg/pull/40535))
- RangeControl: Convert stories to TypeScript. ([41444](https://github.com/WordPress/gutenberg/pull/41444))
- RangeControl: Convert unit tests to typescript. ([41445](https://github.com/WordPress/gutenberg/pull/41445))
- Scrollable: Convert component to TypeScript. ([42016](https://github.com/WordPress/gutenberg/pull/42016))
- TextHighlight: Convert component to TypeScript. ([41698](https://github.com/WordPress/gutenberg/pull/41698))
- Tip: Covert component to TypeScript. ([42262](https://github.com/WordPress/gutenberg/pull/42262))
- VisuallyHidden: Convert component to TypeScript. ([42220](https://github.com/WordPress/gutenberg/pull/42220))
- Spacer: Complete TypeScript migration of component. ([42013](https://github.com/WordPress/gutenberg/pull/42013))
- 
#### Components
- Add eslint to prevent SSR breakage. ([42248](https://github.com/WordPress/gutenberg/pull/42248))
- Fix typos in components changelog. ([42244](https://github.com/WordPress/gutenberg/pull/42244))
- Refactor `ColorPicker` to pass `exhaustive-deps`. ([41294](https://github.com/WordPress/gutenberg/pull/41294))
- Refactor `Navigation` to pass `exhaustive-deps`. ([41612](https://github.com/WordPress/gutenberg/pull/41612))
- Refactor`FocalPointPicker` to pass exhaustive-deps. ([41520](https://github.com/WordPress/gutenberg/pull/41520))


#### Block Library
- More Block: Remove duplicate block class. ([42120](https://github.com/WordPress/gutenberg/pull/42120))
- Page Break Block: Remove duplicate block class. ([42121](https://github.com/WordPress/gutenberg/pull/42121))
- Page List Block: Remove duplicate useBlockProps hook. ([42123](https://github.com/WordPress/gutenberg/pull/42123))
- Remove client side variation fallbacks. ([42180](https://github.com/WordPress/gutenberg/pull/42180))
- Site Logo: Remove unnecessary state. ([42042](https://github.com/WordPress/gutenberg/pull/42042))

### Tools

- Automate the cherry-picking process for WordPress and Gutenberg releases. ([40969](https://github.com/WordPress/gutenberg/pull/40969))
- Update the minimum WP version to 5.9. ([41306](https://github.com/WordPress/gutenberg/pull/41306))
- Components: Remove duplicate CHANGELOG titles. ([42334](https://github.com/WordPress/gutenberg/pull/42334))


#### Testing
- Fix: Multiple regex in packages/env/lib/config/test/config.js. ([42249](https://github.com/WordPress/gutenberg/pull/42249))
- Migrate Block Mover Test For Playwright. ([42039](https://github.com/WordPress/gutenberg/pull/42039))
- Migrate format API test for playwright. ([42035](https://github.com/WordPress/gutenberg/pull/42035))
- Migrate list block test to Playwright. ([41555](https://github.com/WordPress/gutenberg/pull/41555))
- end-to-end Tests: Migrate Comments block test to Playwright. ([39826](https://github.com/WordPress/gutenberg/pull/39826))
- fix: Update Image block native end-to-end test fixture. ([42050](https://github.com/WordPress/gutenberg/pull/42050))
- SelectControl: Use roles and @testing-library/user-event in unit tests. ([42308](https://github.com/WordPress/gutenberg/pull/42308))

#### Build Tooling
- Ignore *.d.ts files when running unit tests. ([42304](https://github.com/WordPress/gutenberg/pull/42304))
- Dependency Extraction: Output asset.php files for shared chunks too. ([41002](https://github.com/WordPress/gutenberg/pull/41002))

#### Create Block
- Added prompt to continue when minimum system requirements not met. ([42151](https://github.com/WordPress/gutenberg/pull/42151))
- More careful prompts to continue when minimum system requirements are not met. ([42254](https://github.com/WordPress/gutenberg/pull/42254))
- Fix regression from `_.size()` refactoring. ([42049](https://github.com/WordPress/gutenberg/pull/42049))

#### Block Library
- Comments block: Change ID to `core/comments`. ([40506](https://github.com/WordPress/gutenberg/pull/40506))
- Elements: Buttons: Style the cursor for all button elements. ([42102](https://github.com/WordPress/gutenberg/pull/42102))
- Post Comments Form: Fix warning i18n. ([42131](https://github.com/WordPress/gutenberg/pull/42131))
- Use more clear and inclusive language in comments. ([42155](https://github.com/WordPress/gutenberg/pull/42155))

#### Global Styles
- Add link element `:Hover` interactivity control to global styles UI. ([41976](https://github.com/WordPress/gutenberg/pull/41976))
- Add support for heading elements. ([41981](https://github.com/WordPress/gutenberg/pull/41981))
- Add visited to link element allowed pseudo selector list. ([42096](https://github.com/WordPress/gutenberg/pull/42096))
- Button Elements: Allow element styles in classic themes. ([42012](https://github.com/WordPress/gutenberg/pull/42012))
- Theme.json:  Add spacing size presets. ([41527](https://github.com/WordPress/gutenberg/pull/41527))
- Theme.json Schema: Add support for button elements. ([42133](https://github.com/WordPress/gutenberg/pull/42133))

#### Block Editor
- Rich text: Remove placeholder on composition start. ([41970](https://github.com/WordPress/gutenberg/pull/41970))
- Rich text: Remove space handling (for BUTTON and SUMMARY). ([41977](https://github.com/WordPress/gutenberg/pull/41977))
- Site Editor: Make Code Editor reflect block conversions. ([42081](https://github.com/WordPress/gutenberg/pull/42081))
- Remove the Template panel option from the Preferences modal ([42030](https://github.com/WordPress/gutenberg/pull/42030))
#### Data Layer
- Enable useSelect autocompletion. ([41911](https://github.com/WordPress/gutenberg/pull/41911))
- Update wordpress/data documentation in order to prefer store object instead of store name to access the store. ([41210](https://github.com/WordPress/gutenberg/pull/41210))

## First time contributors

The following PRs were merged by first time contributors:

- @MarieComet: Button Component readme :  Suggest label in case there is not text. ([40639](https://github.com/WordPress/gutenberg/pull/40639))
- @rflw: Update attributes example: Alter source children. ([41016](https://github.com/WordPress/gutenberg/pull/41016))
- @schutzsmith: Theme.json Documentation - Added new FAQ on disabling caching of theme.json. ([42346](https://github.com/WordPress/gutenberg/pull/42346))
- @welenofsky: Update link to sample code in gutenberg-examples. ([42208](https://github.com/WordPress/gutenberg/pull/42208))


## Contributors

The following contributors merged PRs in this release:

@aaronrobertshaw @adamziel @afercia @alexstine @andrewserong @annezazu @aristath @bph @c4rl0sbr4v0 @carolinan @chad1008 @ciampo @dcalhoun @draganescu @ellatrix @fullofcaffeine @geriux @getdave @glendaviesnz @gziolo @hz-tyfoon @jameskoster @jorgefilipecosta @jsnajdr @kevin940726 @Mamaduka @MarieComet @mcliwanow @mcsf @mikachan @mirka @ndiego @noisysocks @ntsekouras @ockham @oguzkocer @opr @pavanpatil1 @pooja-muchandikar @ralucaStan @ramonjd @renatho @rflw @ryanwelcher @schutzsmith @scruffian @SiobhyB @stokesman @t-hamano @talldan @torounit @tyxla @vdwijngaert @walbo @welenofsky @youknowriad
