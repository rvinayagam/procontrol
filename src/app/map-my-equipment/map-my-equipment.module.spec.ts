import { MapMyEquipmentModule } from './map-my-equipment.module';

describe('MapMyEquipmentModule', () => {
  let mapMyEquipmentModule: MapMyEquipmentModule;

  beforeEach(() => {
    mapMyEquipmentModule = new MapMyEquipmentModule();
  });

  it('should create an instance', () => {
    expect(mapMyEquipmentModule).toBeTruthy();
  });
});
