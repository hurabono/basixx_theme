if (!customElements.get('pickup-availability')) {
  customElements.define('pickup-availability', class PickupAvailability extends HTMLElement {
    constructor() {
      super();

      if(!this.hasAttribute('available')) return;

      this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
      this.onClickRefreshList = this.onClickRefreshList.bind(this);
      this.fetchAvailability(this.dataset.variantId);
    }

    fetchAvailability(variantId) {
      const variantSectionUrl = `${this.dataset.baseUrl}variants/${variantId}/?section_id=pickup-availability`;

      fetch(variantSectionUrl)
        .then(response => response.text())
        .then(text => {
          const sectionInnerHTML = new DOMParser()
            .parseFromString(text, 'text/html')
            .querySelector('.shopify-section');
          this.renderPreview(sectionInnerHTML);
        })
        .catch(e => {
          const button = this.querySelector('.pickup-availability-button');
          if (button) button.removeEventListener('click', this.onClickRefreshList);
          this.renderError();
        });
    }

    onClickRefreshList(evt) {
      this.fetchAvailability(this.dataset.variantId);
    }

    renderError() {
      this.innerHTML = '';
      this.appendChild(this.errorHtml);

      this.querySelector('.pickup-availability-button').addEventListener('click', this.onClickRefreshList);
    }

    renderPreview(sectionInnerHTML) {
      const drawer = document.querySelector('pickup-availability-drawer');
      if (drawer) drawer.remove();
      if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
        this.innerHTML = "";
        this.removeAttribute('available');
        return;
      }

      this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
      this.setAttribute('available', '');

      document.body.appendChild(sectionInnerHTML.querySelector('pickup-availability-drawer'));

      this.querySelector('.pickup-availability-button').addEventListener('click', (evt) => {
        document.querySelector('pickup-availability-drawer').show(evt.target);
      });
    }
  });
}

if (!customElements.get('pickup-availability-drawer')) {
  customElements.define('pickup-availability-drawer', class PickupAvailabilityDrawer extends HTMLElement {
    constructor() {
      super();

      this.onBodyClick = this.handleBodyClick.bind(this);

      this.querySelector('button').addEventListener('click', () => {
        this.hide();
      });

      this.addEventListener('keyup', () => {
        if(event.code.toUpperCase() === 'ESCAPE') this.hide();
      });
    }

    handleBodyClick(evt) {
      const target = evt.target;
      if (target != this && !target.closest('pickup-availability-drawer') && target.id != 'ShowPickupAvailabilityDrawer') {
        this.hide();
      }
    }

    hide() {
      this.removeAttribute('open');
      document.body.removeEventListener('click', this.onBodyClick);
      document.body.classList.remove('overflow-hidden');
      removeTrapFocus(this.focusElement);
    }

    show(focusElement) {
      this.focusElement = focusElement;
      this.setAttribute('open', '');
      document.body.addEventListener('click', this.onBodyClick);
      document.body.classList.add('overflow-hidden');
      trapFocus(this);
    }
  });
};
    jQuery(document).ready(function($){
      function setVariant(){
        let variant_html = '';

        if($('.swatch').length > 0){
          $('.swatch').each(function(i, swatch){
            let swatches_array = [];
            let checked_values = $(swatch).find('input:checked');
            let swatch_header = $(swatch).find('.header').text();
            
            $.each(checked_values, function(j, checked_value){
              swatches_array.push($(checked_value).val());
            });
            
            if(i > 0){
                  variant_html += ", ";
            }
                  variant_html += swatch_header + ": ";
                  variant_html += '<span>' + swatches_array.join(', ') + '</span>';
          });
        }
        
        if($('.selector-wrapper:visible').length > 0){
          $('.selector-wrapper:visible').each(function(i, selector_wrapper){
            if(i > 0){
                  variant_html += ", ";
            }
                         variant_html += $(selector_wrapper).find('label').text() + ": ";
                  variant_html += '<span>' + $(selector_wrapper).find('select').val() + '</span>';
          });
        }
        
        $('.pickup-availability-variant').html(variant_html);
      }
      $('.swatch input').change(function(){
            setVariant();
      });
      
      $('.single-option-selector').change(function(){
        console.log('change');
            setVariant();
      });
    });