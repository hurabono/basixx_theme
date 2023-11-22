```bash
  <div class="{{ section.settings.color_schema }}">

    <section class="xl:max-w-[1320px] px-4 md:px-8 mx-auto"
    style="padding-top:{{ section.settings.padding_top }}rem; padding-bottom:{{ section.settings.padding_bottom }}rem;" 
    {% if section.settings.animation_setting == true %} data-aos="fade-up"{% endif %}> 

        {% comment %} Section title area {% endcomment %}
        <div class="mx-[1.5rem]">
            {% if section.settings.headline != blank %}
            <h1 class="{{ section.settings.title_align }} mb-[1.2rem] text-2xl lg:text-3xl font-bold tracking-wider" style="color:{{ section.settings.color_title }};">
                {{ section.settings.headline }}
            </h1>
            {% endif %}

            {% if section.settings.text != blank %}
            <div class="subfont_size {{ section.settings.title_align }} my-8 leading-8 tracking-wider" style="color:{{ section.settings.color_sub_title }};">
                {{ section.settings.text }}
            </div>
            {% endif %}
        </div>


        {% comment %} Section Contents {% endcomment %}

        <h2> This is the basic template for shopify sections</h2>


    </section>
    
</div>

{% schema %}
{
    "name": "Collage",
    "settings": [
        {
            "type": "header",
            "content": "General settings"
        },
        {
            "type":"select",
            "id":"color_schema",
            "label":"Background color",
            "options":[
            {
                    "value":"first_color",
                    "label":"First Color"
            },
            {
                    "value":"second_color",
                    "label":"Second Color"
            },
            {
                    "value":"third_color",
                    "label":"Third Color"
            },
            {
            "value":"forth_color",
            "label":"Forth Color"
            },
            {
            "value":"fifth_color",
            "label":"Fifth Color"
            },
            {
            "value":"background_transparent",
            "label":"Transparent Color"
            }
            ],
            "default":"fifth_color"
        },
        {
            "type": "range",
            "id": "padding_top",
            "label": "Padding Top controll",
            "default":4,
            "min": 1,
            "max": 20,
            "step": 1,
            "unit": "rem"
        },
        {
            "type": "range",
            "id": "padding_bottom",
            "label": "Padding Bottom controll",
            "default":4,
            "min": 1,
            "max": 20,
            "step": 1,
            "unit": "rem"
        },
        {
        "type": "checkbox",
        "id": "animation_setting",
        "default": false,
        "label": "Animation turn on"
        },
        {
            "type": "header",
            "content": "Title settings",
            "info": "Section Title and color settings"
        },
        {
            "type": "text",
            "id": "headline",
            "label": "t:common.headline",
            "default": "Headline"
        },
        {
            "type": "richtext",
            "id": "text",
            "label": "t:common.text"
        },
        {
            "type":"select",
            "id":"title_align",
            "label":"Title align",
            "options":[
            {
            "value":"font_left",
            "label":"Left"
            },
            {
            "value":"font_right",
            "label":"Right"
            },
            {
            "value":"font_center",
            "label":"Center"
            }
        ],
        "default":"font_center"
        },
        {
            "type": "color",
            "id": "color_title",
            "label": "Section title color",
            "default": "#4b4b4b"
        },
        {
            "type": "color",
            "id": "color_sub_title",
            "label": "Section Description color",
            "default": "#4b4b4b"
        }
        
        ],

        "presets": [
            {
            "name": "College",
            "category": "image"
            }
        ]
}
{% endschema %}
```