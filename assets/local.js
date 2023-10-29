document.querySelectorAll("#localItem").forEach(item=>{
      item.addEventListener("click", event=>{
            document.getElementById("localeCode").value = item.getAttribute("lang");
            document.getElementById("localization_form_tag").submit();
      });
});
