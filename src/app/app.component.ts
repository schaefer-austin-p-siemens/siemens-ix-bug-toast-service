import {
  Component,
  inject
} from '@angular/core';
import {
  IxButton,
  ToastService
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IxButton],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'siemens-ix-bug-toast-service';

  private readonly toastService = inject(ToastService);

  createToast() {
    this.toastService.show({
      message: 'There is no bug in Ba Sing Se.',
      type: 'success',
    });
  }
}
