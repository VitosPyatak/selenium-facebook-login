import { DriverService } from '../driver/driver.service';

export interface Page {
    execute(driver: DriverService): Promise<void>;
}
