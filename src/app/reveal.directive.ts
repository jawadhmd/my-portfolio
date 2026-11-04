import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal');

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('reveal-visible');
        this.observer?.disconnect();
      }
    }, { threshold: 0.15 });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}