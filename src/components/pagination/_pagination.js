const Pagination = {
    code: '',
    
    formatNumber: function (number, classes) {
        return `<li class="pagination__item ${classes}${number === Pagination.page ? ' pagination__number--active' : ''}" data-num="${number}">${number}</li>`;
    },
    
    formatEllipsis: function () {
        return '<li class="pagination__item pagination__ellipsis">&hellip;</li>';
    },
    
    formatPrevious: function () {
        return '' +
            '<li class="pagination__item pagination__prev">' +
            '<svg aria-hidden="true" focusable="false" data-icon="chevron-left"  viewBox="0 0 320 512">' +
            '<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>' +
            '</svg>' +
            '</li>';
    },
    
    formatNext: function () {
        return '<li class="pagination__item pagination__next">' +
            '<svg aria-hidden="true" focusable="false" data-icon="chevron-left"  viewBox="0 0 320 512">' +
            '<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>' +
            '</svg>' +
            '</li>';
    },
    
    add: function (start, end) {
        for (let i = start; i < end; i++) {
            if (i === 1) {
                Pagination.code += this.formatNumber(i, 'pagination__number pagination__first');
            } else if (i === Pagination.size) {
                Pagination.code += this.formatNumber(i, 'pagination__number pagination__last');
            } else {
                Pagination.code += this.formatNumber(i, 'pagination__number');
            }
        }
    },
    
    last: function () {
        Pagination.code += this.formatEllipsis();
        Pagination.code += this.formatNumber(Pagination.size, 'pagination__number pagination__last');
    },
    
    first: function () {
        Pagination.code += this.formatNumber(1, 'pagination__number pagination__first');
        Pagination.code += this.formatEllipsis();
    },
    
    onClick: function (e) {
        if (Pagination.page === +e.target.dataset.num) {
            return;
        }
        Pagination.page = +e.target.dataset.num;
        Pagination.Start();
    },
    
    onPrev: function () {
        if (Pagination.page === 1) {
            return;
        }
        Pagination.page--;
        Pagination.Start();
    },
    
    onNext: function () {
        if (Pagination.page === Pagination.size) {
            return;
        }
        Pagination.page++;
        Pagination.Start();
    },
    
    // binding pages
    Bind: function () {
        const a = Pagination.e.getElementsByClassName('pagination__number');
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener('click', Pagination.onClick, false);
        }
    },
    
    // find pagination type
    Start: function () {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.add(1, Pagination.size + 1);
        } else if (Pagination.page <= Pagination.step * 2 + 2) {
            Pagination.add(1, Pagination.step * 2 + 4);
            Pagination.last();
        } else if (Pagination.page >= Pagination.size - Pagination.step * 2 - 1) {
            Pagination.first();
            Pagination.add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        } else {
            Pagination.first();
            Pagination.add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.last();
        }
        
        const html = `<ul class="pagination__list">${this.formatPrevious()}${Pagination.code}${this.formatNext()}</ul>`;
        Pagination.e.innerHTML = html;
        Pagination.code = '';
        Pagination.Bind();
        Pagination.Buttons();
    },
    
    Buttons: function (e) {
        Pagination.e.getElementsByClassName('pagination__prev')[0].addEventListener('click', Pagination.onPrev, false);
        Pagination.e.getElementsByClassName('pagination__next')[0].addEventListener('click', Pagination.onNext, false);
    },
    
    // init
    Init: function (e, data) {
        data = data || {};
        Pagination.size = data.size;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 2;
        Pagination.e = e;
        
        Pagination.Start();
    }
};

let init = function () {
    Pagination.Init(document.getElementById('pagination'), {
        size: 10, // pages  size
        page: 1,  // selected page
        step: 1   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);

function PaginationClick() {
    let paginationLink = document.querySelectorAll('.pagination-circle__link');
    for (let i = 0; i < paginationLink.length; i++) {
        paginationLink[i].addEventListener('click', function () {
            for (let j = 0; j < paginationLink.length; j++) {
                paginationLink[j].classList.remove('active');
                this.classList.add('active');
            }
        });
    }
}

PaginationClick();