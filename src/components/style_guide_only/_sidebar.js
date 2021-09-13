window.addEventListener('load', () => {
    
    const links = document.querySelectorAll('.fixpanel .link-primary');
    const items = document.querySelectorAll('.items .item');
    
    links.forEach(function (link) {
        const linkAttribute = link.getAttribute('data-link');
        link.classList.remove('link-primary--active');
        
        link.addEventListener('click', () => {
    
            links.forEach(function (el) {
                el.classList.remove('link-primary--active');
            });
            
            items.forEach(function (item) {
                const itemAttribute = item.getAttribute('data-link');
                item.classList.add('hide');
                
                if (linkAttribute === itemAttribute) {
                    link.classList.add('link-primary--active');
                    item.classList.remove('hide');
                    
                }
                
            });
            
        });
    });
    
});
