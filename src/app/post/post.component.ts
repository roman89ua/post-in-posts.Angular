import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() postOfPosts: Post;
  @Output() romoveOn = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  remove(): void{
    this.romoveOn.emit(this.postOfPosts.id);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log('info', this.infoRef.nativeElement);
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges', changes);
  }
  ngDoCheck(): void{
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }
}
