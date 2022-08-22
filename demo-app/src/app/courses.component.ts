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

                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

                <div (click)="onDivClicked()">
                    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave()">Save</button>
                </div>

                <h2>Pipe</h2>
                {{ course.title | uppercase }} <br/>
                {{ course.students | number }} <br/>
                {{ course.rating | number:'1.2-2' }} <br/>
                {{ course.price | currency:'USD' }} <br/>
                {{ course.releaseDate | date:'shortDate' }} <br/><br/>

                {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    title = "List of courses";
    colSpan = 2;
    isActive = false;
    courses;
    email = "me@example.com";

    course = {
        title: "Angular course",
        rating: 4.8632,
        students: 28002,
        price: 200,
        releaseDate: new Date(2016, 4, 1)
    }

    text = 'This is an angular demo app';

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

    onKeyUp() {
        console.log(this.email);
    }

}