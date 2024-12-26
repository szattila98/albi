import type { ComputedRef, InjectionKey } from 'vue';

export const OrderInjectionKey: InjectionKey<ComputedRef<boolean>> = Symbol('order');
