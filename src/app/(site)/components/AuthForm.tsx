'use client';

import Input from '@/app/components/inputs/Input';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      //Axios Register
    }

    if (variant === 'LOGIN') {
      //NextAuth Signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //NextAuth Signin
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input errors={errors} id="name" label="Name" register={register} />
          )}
          <Input
            errors={errors}
            id="email"
            label="Email Address"
            type="email"
            register={register}
          />
          <Input
            errors={errors}
            id="password"
            label="Password"
            type="password"
            register={register}
          />
          <div>
            <Button disabled={isLoading} fullwidth type="submit">
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              onClick={() => socialAction('github')}
              icon={BsGithub}
            />
            <AuthSocialButton
              onClick={() => socialAction('google')}
              icon={BsGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
