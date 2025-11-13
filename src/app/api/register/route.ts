// // app/api/auth/register/route.ts
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { hash } from "bcryptjs";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { firstName, lastName, email, password, department } = body;

//     if (!firstName || !lastName || !email || !password || !department) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // check existing
//     const existing = await prisma.user.findUnique({ where: { email } });
//     if (existing) {
//       return NextResponse.json({ error: "User already exists" }, { status: 409 });
//     }

//     const passwordHash = await hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         firstName,
//         lastName,
//         email,
//         passwordHash,
//         department,
//         // role defaults to 'member' (per prisma schema)
//       },
//       select: {
//         id: true,
//         email: true,
//         firstName: true,
//         lastName: true,
//         role: true,
//       }
//     });

//     return NextResponse.json({ ok: true, user }, { status: 201 });
//   } catch (error: any) {
//     console.error("Register error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
