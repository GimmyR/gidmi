# Gidmi

**Live demo:** https://gidmi.vercel.app/

Gidmi is an interactive learning platform that guides developers through building a complete **Next.js full-stack application**.

It is built with :

* **Next** for the frontend and the backend (fullstack framework)
* **Clerk** for secure authentication
* **Prisma ORM** for database access
* **Prisma PostgreSQL** for data persistence

## Prerequisites

Before running the application, make sure you have the following installed :

* **Node** 20.18.0
* **NPM** 11.6.0

## Environment

```bash
# Your emailjs public key
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_change_me

# Your emailjs service ID
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_id_change_me

#Your emailjs template ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_id_change_me
```

## Dependencies

Install the dependencies by running :

```bash
npm install
```

## Launch the application

Run the application by executing the following command :

```bash
npm run dev
```

You can access the application in your browser at http://localhost:3000.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.