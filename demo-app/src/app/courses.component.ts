import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', 
    template: `
                <h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }} 
                    </li>
                </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    getTitle() {
        return this.title;
    }

    // Dependency Injection
    // This contructor has dependency on CoursesService
    // Need to register dependencies somewhere in our module
    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

}