describe('IMDb Testing', () => {
  beforeEach(() =>{ 
  cy.visit('/');
   })

// test 1 
    it('Should navigate to Nicolas Cage’s Completed upcoming movie', () => {
      cy.get('input[name="q"]').should("have.attr", "placeholder", "Search IMDb").type('Nicolas Cage').get('button[id="suggestion-search-button"]').click()
      cy.contains('Nicolas Cage').should('be.visible').click();
      cy.contains('Upcoming').click();
      cy.contains('Completed').click();
  });

  // test 2 
    it('Top Box Office section, rate the 2nd item, set a 5 stars', () => {
      cy.contains('Menu').click();
      cy.contains('Movies').click();
      cy.get('[data-testid="list-container"]').contains('Top Box Office').click();
      cy.getByData('chart-layout-main-column').getByClass('ipc-title ipc-title--base ipc-title--title ipc-title-link-no-icon ipc-title--on-textPrimary sc-a69a4297-2 bqNXEn cli-title with-margin').eq(1).find('a').click();
      cy.getByData('hero-rating-bar__aggregate-rating').get('a[aria-label="View User Ratings"]').first().click({ force: true });
      cy.getByData('rating-button__user-rating__unrated').contains('Rate').click();
      cy.getByData('promptable__pc').get('button[aria-label="Rate 5"]').click({force: true});
      cy.getByClass('ipc-btn ipc-btn--single-padding ipc-btn--center-align-content ipc-btn--default-height ipc-btn--core-accent1 ipc-btn--theme-baseAlt ipc-btn--button-radius ipc-rating-prompt__rate-button').contains('Rate').click();
    });
  
    // test 3
    it('Top 250 TV Shows section, Danny Trejo, photos', () => {
      cy.contains('Menu').click();
      cy.contains('TV Shows').click();
      cy.getByClass('navlinkcat__listContainerInner').contains('Top 250 TV Shows').click();
      cy.getByClass('ipc-title__text').contains('1. Breaking Bad').click();
      cy.getByData('hero__photo-link').click();
      cy.getByData('mv-gallery-button').click();
      cy.getByData('image-chip-dropdown-test-id').click();
      cy.getByData('chip-container-title-test-id').contains('Person');
      cy.getByClass('ipc-select__input').eq(0).click();
      cy.getByData('select-dropdown-test-id').first().select('Danny Trejo (6)');
      //cy.getByData('select-dropdown-test-id').first().select('nm0001803');
      cy.getByData('promptable__x').click();
      cy.getByData('rm123229952-img-1').click();
    });

      // test 4
      it('Born today section, click on the 3rd name in the list + screenshot', () => {
        cy.contains('Menu').click();
        cy.contains('Celebs').click();
        cy.contains('Born Today').click();
        cy.getByClass('sc-d1bbe268-0 eZzkdn ipc-chip ipc-chip--on-base').click();
        cy.get('div[id="birthdayAccordion"]').click();
        cy.get('input[aria-label="Enter birthday"]').type('11-03').click('left');
        //cy.get('button[aria-label="See results"]').click();
        cy.get('body').click({force:true});  
        cy.get('button[aria-label="See results"]').click();
        cy.getByClass('ipc-metadata-list ipc-metadata-list--dividers-between sc-748571c8-0 gFCVNT detailed-list-view ipc-metadata-list--base').getByData('nlib-title').get('a[href="/name/nm0000185/?ref_=sr_t_3"]').click();
        cy.screenshot();
      });

      // test 5
      it('Born today section, search for Celebrities born 40 years ago', () => {
        cy.contains('Menu').click();
        cy.contains('Celebs').click();
        cy.contains('Born Today').click();
        cy.getByClass('sc-d1bbe268-0 eZzkdn ipc-chip ipc-chip--on-base').click();
        cy.contains('Birth date').click();
        cy.getByData('birthDate-start').click().type('1984-11-03');
        cy.getByData('birthDate-end').type('1984-11-03')
        cy.getByData('adv-search-get-results').click();
        cy.get('a').first().click({force: true});
        cy.screenshot();
      });
  });
