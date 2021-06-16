import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from "../../../entity/book.entity";
import {FullnamePipe} from "../../pipes/fullname.pipe";

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent, FullnamePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {title: 'Super livre', description: '', author: {firsname: 'Nico', lastname: 'Coco'}} as Book;

    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display the title', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.innerHTML).toContain(component.book.title);
  })

  it('mini param should display btn',()=>{
    component.mini = true;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn).not.toBeNull();
  })
});
