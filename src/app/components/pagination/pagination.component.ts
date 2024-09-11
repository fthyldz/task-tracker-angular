import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagination',
    standalone: true,
    templateUrl: 'pagination.component.html',
    imports: [CommonModule]
})
export class PaginationComponent implements OnInit {
    @Input() page: number = 1;
    @Input() totalCount: number = 0;
    @Input() itemsPerPage: number = 5;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();
    totalPages: number = 1;

    ngOnInit(): void {
        this.calculateTotalPages();
    }

    calculateTotalPages() {
        this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage);
    }

    changePage(newPage: number | string) {
        newPage = Number(newPage);
        if (newPage >= 1 && newPage <= this.totalPages) {
            this.page = newPage;
            this.pageChanged.emit(this.page);
        }
    }

    pagesToShow(): (number | string)[] {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 6;

        // Eğer toplam sayfa sayısı gösterilebilecek sayfadan azsa, tüm sayfaları göster.
        if (this.totalPages <= maxVisiblePages) {
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        } else {
            // İlk sayfa ve son sayfa sabit, ortalar dinamik
            pages.push(1);

            if (this.page > 3) {
                pages.push('...');
            }

            const startPage = Math.max(2, this.page - 1);
            const endPage = Math.min(this.totalPages - 1, this.page + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (this.page < this.totalPages - 2) {
                pages.push('...');
            }

            pages.push(this.totalPages);
        }

        return pages;
    }

    onClickDots(dotPosition: string, index: number) {
        if (dotPosition === '...') {
            if (this.pagesToShow().indexOf(this.page) < (index + 1)) {
                // İlk "..." tıklanırsa, 2 sayfa ileri git
                this.changePage(this.page + 2);
            } else {
                // Son "..." tıklanırsa, 2 sayfa geri git
                this.changePage(this.page - 2);
            }
        }
    }
}
