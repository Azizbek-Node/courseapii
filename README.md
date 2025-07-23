<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

````````````````````````````````````````````````````````````````````````````````````````````````
UZBEK

# Course & Task Management Backend

Bu loyiha NestJS asosida yozilgan va quyidagi asosiy imkoniyatlarni beradi:
- Foydalanuvchi (student/admin) ro‘yxatdan o‘tishi va tizimga kirishi (JWT)
- Kurslar yaratish, tahrirlash, o‘chirish (faqat admin)
- Studentlarni kursga yozish va o‘z kurslarini ko‘rish
- Tasklar yaratish va boshqarish (student uchun)

## Ishga tushirish

```bash
npm install
npm run start:dev
```

`.env` faylini to‘ldiring (namuna):
```
PORT=3033
MONGO_URL=mongodb://localhost:27017/course
ACCESS_TOKEN_KEY=MySecretAccessTokenKey
ACCESS_TOKEN_TIME=15h
REFRESH_TOKEN_KEY=MyVerySecretRefreshTokenKey
REFRESH_TOKEN_TIME=15d
REFRESH_TOKEN_MS=864000000
```

## Swagger API hujjati

Swagger UI: [http://localhost:3033/api](http://localhost:3033/api)

## Asosiy endpointlar

- `POST /auth/register` — Ro‘yxatdan o‘tish
- `POST /auth/login` — Login (JWT olish)
- `GET /courses` — Kurslar ro‘yxati
- `POST /courses` — Kurs yaratish (faqat admin)
- `POST /courses/:courseId/register` — Kursga yozilish (student)
- `GET /students/:id/courses` — Student kurslari
- `GET /tasks` — Tasklar ro‘yxati (student)
- `POST /tasks` — Task yaratish (student)

## Foydalanish

1. Swagger orqali barcha endpointlarni test qilishingiz mumkin.
2. JWT tokenni olish uchun `/auth/login` dan foydalaning va Swagger’da "Authorize" tugmasi orqali kiriting.

---

Agar savollar bo‘lsa yoki xatolik

````````````````````````````````````````````````````````````````````````````````````````````````
ENGLISH

# Course & Task Management Backend

This project is a backend API built with NestJS that provides:

- User registration and login (JWT-based, supports student/admin roles)
- Course creation, editing, and deletion (admin only)
- Student enrollment in courses and viewing their own courses
- Task creation and management for students

## Getting Started

```bash
npm install
npm run start:dev
```

Fill in your `.env` file (example):
```
PORT=3033
MONGO_URL=mongodb://localhost:27017/course
ACCESS_TOKEN_KEY=MySecretAccessTokenKey
ACCESS_TOKEN_TIME=15h
REFRESH_TOKEN_KEY=MyVerySecretRefreshTokenKey
REFRESH_TOKEN_TIME=15d
REFRESH_TOKEN_MS=864000000
```

## Swagger API Documentation

Swagger UI: [http://localhost:3033/api](http://localhost:3033/api)

## Main Endpoints

- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login and get JWT
- `GET /courses` — List all courses
- `POST /courses` — Create a course (admin only)
- `POST /courses/:courseId/register` — Enroll in a course (student)
- `GET /students/:id/courses` — Get a student's courses
- `GET /tasks` — List tasks (student)
- `POST /tasks` — Create a task (student)

## Usage

1. Test all endpoints via Swagger UI.
2. Obtain a JWT token via `/auth/login` and use the "Authorize" button in Swagger to authenticate.

---

If you have any questions or encounter issues, feel free to reach out!