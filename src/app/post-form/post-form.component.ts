import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Post} from '../post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() addOn: EventEmitter<Post> = new EventEmitter<Post>();


  @ViewChild('titleInput', {static: true}) inputRef: ElementRef; // true if we going to use it with ngOnInit() and false if not
  title = '';
  text = '';
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.focusTitle();

  }
  addPost(): void{
    if (this.title.trim() && this.text.trim()){
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.addOn.emit(post);
      this.title = this.text = '';
    }
  }
  focusTitle(): void{
    this.inputRef.nativeElement.focus();
  }
}
