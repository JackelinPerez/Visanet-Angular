import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNetworkComponent } from './contacts-network.component';

describe('ContactsNetworkComponent', () => {
  let component: ContactsNetworkComponent;
  let fixture: ComponentFixture<ContactsNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
