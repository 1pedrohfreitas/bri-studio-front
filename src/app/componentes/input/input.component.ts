import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, SimpleChanges, Type } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type : any ;
  @Input() specialType ?: 'cpf' | 'cnpj' | 'cep';
  @Input() readonly: boolean = false;
  @Input() upperCase: boolean = false;
  @Input() mask ?: string;
  @Input() disable: boolean = false;

  @Input() value: any = '';
  @Output() valueChange = new EventEmitter<any>();

  private rawValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.formatacaoEspecial();
    }
    if (changes['label']) {
      this.label = changes['label'].currentValue
    }
    if (changes['id']) {
      this.id = changes['id'].currentValue
    }
    if (changes['type']) {
      this.type = changes['type'].currentValue
    }
    if (changes['specialType']) {
      this.specialType = changes['specialType'].currentValue
    }
    if (changes['readonly']) {
      this.readonly = changes['readonly'].currentValue
    }
    if (changes['upperCase']) {
      this.upperCase = changes['upperCase'].currentValue
    }
    if (changes['mask']) {
      this.mask = changes['mask'].currentValue
    }
    if (changes['disable']) {
      this.disable = changes['disable'].currentValue
    }
  }

  @HostListener('input', ['$event'])
  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if(this.mask != undefined){
      input.maxLength = this.mask.length
      this.rawValue = input.value.replace(/\D/g, '');
      this.value = this.applyMask(this.rawValue);
    }
    this.valueChange.emit(input.value);
  }

  applyMask(value: string): string {
    let maskedValue = '';
    let valueIndex = 0;
    if(this.mask != undefined){
      for (let i = 0; i < this.mask.length; i++) {
        if (this.mask[i] === '0') {
          if (value[valueIndex]) {
            maskedValue += value[valueIndex];
            valueIndex++;
          } else {
            break;
          }
        } else {
          maskedValue += this.mask[i];
        }
      }
    }
    return maskedValue;
  }

  formatacaoEspecial(){
    if(this.value != undefined && this.value != null && this.upperCase){
      this.value = this.value.toUpperCase()
    }
    if(this.specialType != undefined){
      switch (this.specialType) {
        case 'cep':
            this.mask = '00000-000';            
          break;
          case 'cpf':
            this.mask = '000.000.000-00'          
          break;
          case 'cnpj':
            this.mask = '00.000.000/0000-00'          
          break;
        default:
          break;
      }
    }
  }

}
