import { Injector } from '../di/injector';
import { ResolvedReflectiveProvider } from '../di/reflective_provider';
import { Type } from '../facade/lang';
import { ComponentRef } from './component_factory';
import { ComponentResolver } from './component_resolver';
import { ViewContainerRef } from './view_container_ref';
/**
 * Use ComponentResolver and ViewContainerRef directly.
 *
 * @deprecated
 */
export declare abstract class DynamicComponentLoader {
    /**
     * Creates an instance of a Component `type` and attaches it to the first element in the
     * platform-specific global view that matches the component's selector.
     *
     * In a browser the platform-specific global view is the main DOM Document.
     *
     * If needed, the component's selector can be overridden via `overrideSelector`.
     *
     * A provided {@link Injector} will be used to instantiate the Component.
     *
     * To be notified when this Component instance is destroyed, you can also optionally provide
     * `onDispose` callback.
     *
     * Returns a promise for the {@link ComponentRef} representing the newly created Component.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   selector: 'child-component',
     *   template: 'Child'
     * })
     * class ChildComponent {
     * }
     *
     * @Component({
     *   selector: 'my-src',
     *   template: 'Parent (<child id="child"></child>)'
     * })
     * class MyApp {
     *   constructor(dcl: DynamicComponentLoader, injector: Injector) {
     *     dcl.loadAsRoot(ChildComponent, '#child', injector);
     *   }
     * }
     *
     * bootstrap(MyApp);
     * ```
     *
     * Resulting DOM:
     *
     * ```
     * <my-src>
     *   Parent (
     *     <child id="child">Child</child>
     *   )
     * </my-src>
     * ```
     */
    abstract loadAsRoot(type: Type, overrideSelectorOrNode: string | any, injector: Injector, onDispose?: () => void, projectableNodes?: any[][]): Promise<ComponentRef<any>>;
    /**
     * Creates an instance of a Component and attaches it to the View Container found at the
     * `location` specified as {@link ViewContainerRef}.
     *
     * You can optionally provide `providers` to configure the {@link Injector} provisioned for this
     * Component Instance.
     *
     * Returns a promise for the {@link ComponentRef} representing the newly created Component.
     *
     *
     * ### Example
     *
     * ```
     * @Component({
     *   selector: 'child-component',
     *   template: 'Child'
     * })
     * class ChildComponent {
     * }
     *
     * @Component({
     *   selector: 'my-src',
     *   template: 'Parent'
     * })
     * class MyApp {
     *   constructor(dcl: DynamicComponentLoader, viewContainerRef: ViewContainerRef) {
     *     dcl.loadNextToLocation(ChildComponent, viewContainerRef);
     *   }
     * }
     *
     * bootstrap(MyApp);
     * ```
     *
     * Resulting DOM:
     *
     * ```
     * <my-src>Parent</my-src>
     * <child-component>Child</child-component>
     * ```
     */
    abstract loadNextToLocation(type: Type, location: ViewContainerRef, providers?: ResolvedReflectiveProvider[], projectableNodes?: any[][]): Promise<ComponentRef<any>>;
}
export declare class DynamicComponentLoader_ extends DynamicComponentLoader {
    private _compiler;
    constructor(_compiler: ComponentResolver);
    loadAsRoot(type: Type, overrideSelectorOrNode: string | any, injector: Injector, onDispose?: () => void, projectableNodes?: any[][]): Promise<ComponentRef<any>>;
    loadNextToLocation(type: Type, location: ViewContainerRef, providers?: ResolvedReflectiveProvider[], projectableNodes?: any[][]): Promise<ComponentRef<any>>;
}
