import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import {AppModule} from './app.module';
import * as request from 'supertest';

describe('Health liveliness check', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterEach(async () => {
        await app.close();
    });

    it('return 200 when application is live', () => {
        return request(app.getHttpServer())
            .get('/health/live')
            .expect(200);
    });
});
