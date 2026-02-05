/**
 * Devices integration tests
 */

import { describe, it, expect } from 'vitest';
import { NinjaOneClient } from '../../src/client.js';
import { NinjaOneNotFoundError } from '../../src/errors.js';

describe('DevicesResource', () => {
  const client = new NinjaOneClient({
    clientId: 'test-client-id',
    clientSecret: 'test-client-secret',
    region: 'us',
  });

  describe('list', () => {
    it('should list all devices', async () => {
      const devices = await client.devices.list();

      expect(devices).toHaveLength(2);
      expect(devices[0]?.displayName).toBe('DESKTOP-001');
    });
  });

  describe('listByOrganization', () => {
    it('should list devices for an organization', async () => {
      const devices = await client.devices.listByOrganization(1);

      expect(devices).toHaveLength(2);
    });
  });

  describe('get', () => {
    it('should get a single device', async () => {
      const device = await client.devices.get(101);

      expect(device.id).toBe(101);
      expect(device.displayName).toBe('DESKTOP-001');
      expect(device.nodeClass).toBe('WINDOWS_WORKSTATION');
    });

    it('should throw NotFoundError for non-existent device', async () => {
      await expect(client.devices.get(999)).rejects.toThrow(NinjaOneNotFoundError);
    });
  });

  describe('update', () => {
    it('should update a device', async () => {
      const device = await client.devices.update(101, {
        displayName: 'DESKTOP-001-UPDATED',
      });

      expect(device.displayName).toBe('DESKTOP-001-UPDATED');
    });
  });

  describe('delete', () => {
    it('should delete a device', async () => {
      await expect(client.devices.delete(101)).resolves.toBeUndefined();
    });
  });

  describe('reboot', () => {
    it('should reboot a device', async () => {
      await expect(client.devices.reboot(101, 'Maintenance')).resolves.toBeUndefined();
    });
  });

  describe('getActivities', () => {
    it('should get device activities', async () => {
      const result = await client.devices.getActivities(101);

      expect(result.activities).toHaveLength(2);
      expect(result.activities[0]?.type).toBe('AGENT');
    });
  });

  describe('getServices', () => {
    it('should get device services', async () => {
      const services = await client.devices.getServices(101);

      expect(services).toHaveLength(2);
      expect(services[0]?.name).toBe('Spooler');
    });
  });

  describe('getSoftware', () => {
    it('should get device software', async () => {
      const software = await client.devices.getSoftware(101);

      expect(software).toHaveLength(2);
      expect(software[0]?.name).toBe('Microsoft Office 365');
    });
  });

  describe('getInventory', () => {
    it('should get device inventory', async () => {
      const inventory = await client.devices.getInventory(101);

      expect(inventory.processors).toHaveLength(1);
      expect(inventory.memory?.totalRam).toBe(34359738368);
    });
  });
});
