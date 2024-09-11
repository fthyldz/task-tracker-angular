import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DataTableComponent } from "../../components/data-table/data-table.component";

@Component({
    selector: "app-dashboard",
    standalone: true,
    templateUrl: "dashboard.component.html",
    imports: [CommonModule, DataTableComponent]
})
export class DashboardComponent {
    columns = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' }
    ];
    users = [
        { id: 1, name: 'Ahmet', email: 'ahmet@example.com', active: true },
        { id: 2, name: 'Mehmet', email: 'mehmet@example.com', active: false },
        { id: 3, name: 'Ayşe', email: 'ayse@example.com', active: true }
    ];
    page = 1;
    itemsPerPage = 5;

    paginatedUsers() {
        const start = (this.page - 1) * this.itemsPerPage;
        return this.users.slice(start, start + this.itemsPerPage);
    }

    onPageChange(newPage: number) {
        this.page = newPage;
    }
}