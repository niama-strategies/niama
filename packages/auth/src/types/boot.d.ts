import { BootO, Payload, Raw } from '@niama/auth/types';
import { GetBootCfg, GetBootP, GetBootSagaP, GetRawCfg, GetServiceO, Maybe } from '@niama/core/types';

import { Po } from './main';
import * as S from './services';

// CONFIG===================================================================================================================================

export type BootCfg = GetBootCfg<BootO, Provider, Raw, Services>;
export type BootAuthP = GetBootP<BootCfg>;
export type RawCfg = GetRawCfg<BootCfg>;
export type ServiceO = GetServiceO<BootCfg>;
export type BootSagaP<Done, Res, Src, Fail = null> = GetBootSagaP<BootCfg, Done, Res, Src, Fail>;

// PROVIDER ================================================================================================================================

export interface Provider extends Services, GetServiceO<BootCfg> {}

// SERVICES ================================================================================================================================

export interface Services {
  // refreshSession: () => any;
  // current: Current<C['CurrentDto'], C['Role']>;
  changePassword: <Done, Fail>(p: S.ChangePasswordP<Done, Fail>) => S.ChangePasswordR<Done, Fail>;
  confirmSignup: <Done, Fail>(p: S.ConfirmSignupP<Done, Fail>) => S.ConfirmSignupR<Done, Fail>;
  //deleteCurrent$?: (p: S.DeleteCurrentP) => Observable;
  fetch: () => Promise<Maybe<Payload>>;
  fromPayload: (p: Maybe<Payload>) => Po;
  //getCurrent$<Done, Fail>(p: S.GetCurrentP<Done, Fail>): S.GetCurrentR<Done, Fail>;
  //getRefreshedTokens$<Done, Fail>(p: any): any;
  //refresh$: (p: S.RefreshP) => Observable;

  resetPassword: <Done, Fail>(p: S.ResetPasswordP<Done, Fail>) => S.ResetPasswordR<Done, Fail>;
  //sendEmailResetCode$?: (p: S.SendEmailResetCodeP) => Observable;
  sendConfirmSignup: <Done, Fail>(p: S.SendConfirmSignupP<Done, Fail>) => S.SendConfirmSignupR<Done, Fail>;
  sendResetPassword: <Done, Fail>(p: S.SendResetPasswordP<Done, Fail>) => S.SendResetPasswordR<Done, Fail>;
  sendVerifyEmail: <Done, Fail>(p: S.SendVerifyEmailP<Done, Fail>) => S.SendVerifyEmailR<Done, Fail>;
  signin: <Done, Fail>(p: S.SigninP<Done, Fail>) => S.SigninR<Done, Fail>;
  signout: <Done, Fail>(p: S.SignoutP<Done, Fail>) => S.SignoutR<Done, Fail>;
  signup: <Done, Fail>(p: S.SignupP<Done, Fail>) => S.SignupR<Done, Fail>;
  verifyEmail: <Done, Fail>(p: S.VerifyEmailP<Done, Fail>) => S.VerifyEmailR<Done, Fail>;
}
