import { EquipmentControlModule } from './equipment-control.module';

describe('EquipmentControlModule', () => {
  let equipmentControlModule: EquipmentControlModule;

  beforeEach(() => {
    equipmentControlModule = new EquipmentControlModule();
  });

  it('should create an instance', () => {
    expect(equipmentControlModule).toBeTruthy();
  });
});
