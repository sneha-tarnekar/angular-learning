import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', 
    template: `
                <h2>{{ title }}</h2>
                <h2 [textContent]="title" [style.backgroundColor]="isActive ? 'blue' : 'gray'"></h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }} 
                    </li>
                </ul>
                <table>
                    <tr>
                      <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>

                <input #email (keyup.enter)="onKeyUp(email.value)" />

                <div (click)="onDivClicked()">
                    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave()">Save</button>
                </div>
    `
})
export class CoursesComponent {
    title = "List of courses";
    colSpan = 2;
    isActive = false;
    courses;
    email: any;

    // Dependency Injection
    // This contructor has dependency on CoursesService
    // Need to register dependencies somewhere in our module
    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onSave() {
        console.log("Button is clicked")
    }

    onDivClicked() {
        console.log("Div is clicked")
    }

    onKeyUp(email: any) {
        console.log(email);
    }

}