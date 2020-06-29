'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">qcforce-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d4d34a9f9f1a36a3a7ee5e8a00cfa9e9"' : 'data-target="#xs-components-links-module-AppModule-d4d34a9f9f1a36a3a7ee5e8a00cfa9e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d4d34a9f9f1a36a3a7ee5e8a00cfa9e9"' :
                                            'id="xs-components-links-module-AppModule-d4d34a9f9f1a36a3a7ee5e8a00cfa9e9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BatchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchReportsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BatchReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchesDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BatchesDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurriculumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurriculumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyManageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyManageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeeklyReportsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeeklyReportsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CurriculumReportsComponent.html" data-type="entity-link">CurriculumReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrainerReportsComponent.html" data-type="entity-link">TrainerReportsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BatchDetailsService.html" data-type="entity-link">BatchDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsService.html" data-type="entity-link">ReportsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Associate.html" data-type="entity-link">Associate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Batch.html" data-type="entity-link">Batch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchState.html" data-type="entity-link">BatchState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartData.html" data-type="entity-link">ChartData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTable.html" data-type="entity-link">ChartTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Criteria.html" data-type="entity-link">Criteria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderState.html" data-type="entity-link">HeaderState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportsState.html" data-type="entity-link">ReportsState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});