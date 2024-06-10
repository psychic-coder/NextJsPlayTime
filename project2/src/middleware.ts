import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
//the first part of the code gives us the logic
export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    
    //the public paths are login and signup
    const isPublicPath=path==="/login"||path==="/signup"
    //we're checking if the token is present or not
   const token= request.cookies.get("token")?.value||""

   //if both the things are present then the user should not visit the login and signup page
    if(isPublicPath && token ){
        return NextResponse.redirect(new URL("/profile",request.nextUrl))
    }
    //if the user is not having the token then he should is redirected to the login page
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl))
    }
}
 

//in the below part we are mentioning the paths for which we want to apply the middleware
export const config = {
  matcher: ['/','/profile','/login','/signup'],
}