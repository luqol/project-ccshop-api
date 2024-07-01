import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Filament PLA 1.75mm 1kg',
      price: 100,
      description: 'Wysokiej jakości filament PLA do drukarek 3D.',
    },
    {
      id: 'cd8b1569-89d3-4a9d-8e0e-c81744d9e8b1',
      name: 'Filament ABS 1.75mm 1kg',
      price: 120,
      description: 'Wytrzymały filament ABS do drukarek 3D.',
    },
    {
      id: 'a2c6fd0a-6e4b-44a8-8778-cd3e7dc6bc93',
      name: 'Filament PETG 1.75mm 1kg',
      price: 130,
      description: 'Elastyczny i wytrzymały filament PETG do drukarek 3D.',
    },
    {
      id: 'fb5f9aef-4168-41e3-9d5e-7cb1f719206d',
      name: 'Drukarka 3D Prusa i3 MK3S+',
      price: 3500,
      description: 'Profesjonalna drukarka 3D Prusa i3 MK3S+.',
    },
    {
      id: '1d6c5e07-5e1d-4fd4-96bb-5fced61e1f43',
      name: 'Drukarka 3D Creality Ender 3 V2',
      price: 1200,
      description: 'Popularna drukarka 3D Creality Ender 3 V2.',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'c1bda045-735f-4d3d-9e3d-2e3d232c1c4d',
      clientName: 'Jan Kowalski',
      email: 'jan.kowalski@example.com',
      address: 'ul. Polna 12, 00-001 Warszawa',
      phone: 123456789,
    },
    {
      id: '3b841f25-8d0d-4c8e-b6b9-1a5f9a2f1c25',
      clientName: 'Anna Nowak',
      email: 'anna.nowak@example.com',
      address: 'ul. Leśna 7, 00-002 Kraków',
      phone: 987654321,
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fc94c151-2497-4c1c-8a72-6c40b6d017b4',
      clientId: 'c1bda045-735f-4d3d-9e3d-2e3d232c1c4d',
    },
    {
      id: '7fdc0a98-8c3d-4fd4-bdd9-f7d2c1d72c7b',
      clientId: 'c1bda045-735f-4d3d-9e3d-2e3d232c1c4d',
    },
    {
      id: '4e16d246-7240-4e7d-b618-47c4fd2e2f4b',
      clientId: '3b841f25-8d0d-4c8e-b6b9-1a5f9a2f1c25',
    },
  ];
}

function getOrderProducts() {
  return [
    {
      id: '7ebc9e3d-59d1-4f57-982b-5f3c8e7e8b1d',
      orderId: 'fc94c151-2497-4c1c-8a72-6c40b6d017b4',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      note: 'Proszę o szybką wysyłkę.',
      quantity: 2,
    },
    {
      id: '2a2bce14-d2f4-43a8-957f-04e3d88e8b1d',
      orderId: 'fc94c151-2497-4c1c-8a72-6c40b6d017b4',
      productId: 'fb5f9aef-4168-41e3-9d5e-7cb1f719206d',
      note: 'Dodatkowe pytania proszę kierować na email.',
      quantity: 1,
    },
    {
      id: 'cd8b1569-89d3-4a9d-8e0e-c81744d9e8b1',
      orderId: '7fdc0a98-8c3d-4fd4-bdd9-f7d2c1d72c7b',
      productId: 'cd8b1569-89d3-4a9d-8e0e-c81744d9e8b1',
      note: 'Proszę o solidne pakowanie.',
      quantity: 3,
    },
    {
      id: 'f48c2c4a-2497-4e1d-b47e-6d40b4e2d7d2',
      orderId: '4e16d246-7240-4e7d-b618-47c4fd2e2f4b',
      productId: 'a2c6fd0a-6e4b-44a8-8778-cd3e7dc6bc93',
      note: 'Proszę o fakturę VAT.',
      quantity: 1,
    },
    {
      id: 'a4d4b1d9-8e8f-4b4d-967b-5c3c1d4c8e3e',
      orderId: '4e16d246-7240-4e7d-b618-47c4fd2e2f4b',
      productId: '1d6c5e07-5e1d-4fd4-96bb-5fced61e1f43',
      note: 'Dziękuję.',
      quantity: 1,
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client });
    }),
  );

  await Promise.all(
    getOrders().map((order) => {
      return db.order.create({ data: order });
    }),
  );

  await Promise.all(
    getOrderProducts().map((orderProduct) => {
      return db.orderProduct.create({ data: orderProduct });
    }),
  );
}

seed()