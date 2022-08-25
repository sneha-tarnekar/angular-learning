import { animate } from '@angular/animations';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  viewMode = 'map';

  canSave = true;

  // task = {
  //   title: 'Review applications',
  //   assignee: null
  // }

  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' }
  // ];

  courses: any;

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course: any) {
    course.name = 'UPDATED'
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined;
  }

  
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed!', eventArgs);
  }
}
