import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
    selector: 'app-data-table',
    standalone: true,
    templateUrl: 'data-table.component.html',
    imports: [CommonModule, PaginationComponent]
})
export class DataTableComponent {
    @Input() columns: {
        key: string;
        title: string;
    }[] = [];
    @Input() totalCount: number = 0;
    @Input() itemsPerPage: number = 5;
    @Input() data: any[] = [];
    @Input() page: number = 1;
    @Input() noRecordText: string = "No record found.";
    @Input() actions: {
        delete: boolean,
        edit: boolean,
        detail: boolean,
        active: boolean
    } | null = null;

    @Output() onPageChange: EventEmitter<number> = new EventEmitter();

    pageChanged(newPage: number) {
        this.page = newPage;
        this.onPageChange.emit(this.page);
    }
}