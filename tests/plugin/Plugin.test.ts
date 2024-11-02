
import { RouteRef, ExternalRouteRef } from "@catcode/core-routing";
import { Extension, ExtensionKind, Plugin } from "../../src";


describe('Create plugin', ()=>{

    test('directly', ()=>{
                // Arrange: Define test values
            const id = "test-plugin-id";
            const routeRef = { id: "route-ref-id" } as RouteRef; // Mock RouteRef
            const externalRouteRefs = {
                someRoute: { id: "external-route-ref-id" } as ExternalRouteRef
            };
            const extensions: Extension[] = [
                new Extension("ext1", "Test Extension 1", ExtensionKind.Component, false, {id: 'test', input: 'test'}, jest.fn(), [], [], {})
            ];
            
            const plugin = new Plugin(id, routeRef, externalRouteRefs, extensions)

            // Assert: Verify all properties are set correctly
            expect(plugin).toBeInstanceOf(Plugin);
            expect(plugin.id).toBe(id);
            expect(plugin.routeRef).toBe(routeRef);
            expect(plugin.externalRouteRefs).toEqual(externalRouteRefs);
            expect(plugin.extensions).toEqual(extensions);
    })

}
); 