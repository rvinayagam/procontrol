import { EquipmentNearByModule } from './equipment-near-by.module';

describe('EquipmentNearByModule', () => {
  let equipmentNearByModule: EquipmentNearByModule;

  beforeEach(() => {
    equipmentNearByModule = new EquipmentNearByModule();
  });

  it('should create an instance', () => {
    expect(equipmentNearByModule).toBeTruthy();
  });
});
