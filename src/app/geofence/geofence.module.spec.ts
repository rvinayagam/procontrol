import { GeofenceModule } from './geofence.module';

describe('GeofenceModule', () => {
  let geofenceModule: GeofenceModule;

  beforeEach(() => {
    geofenceModule = new GeofenceModule();
  });

  it('should create an instance', () => {
    expect(geofenceModule).toBeTruthy();
  });
});
