'use server'
export async function checkWithReCaptcha(token: string | null) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,{method: 'POST'});
    const data = await res.json();
    console.log(data);
}