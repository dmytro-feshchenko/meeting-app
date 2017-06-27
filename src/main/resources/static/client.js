import rest from 'rest';
import defaultRequest from 'rest/interceptor/defaultRequest';
import mime from 'rest/interceptor/mime';
import uriTemplateInterceptor from './api/uriTemplateInterceptor';
import errorCode from 'rest/interceptor/errorCode';
import { read, write } from './api/uriListConverter';
import baseRegistry from 'rest/mime/registry';
import hal from 'rest/mime/type/application/hal';

const registry = baseRegistry.child();

registry.register('text/uri-list', {
    read,
    write
});

registry.register('application/hal+json', hal);

export default rest
                .wrap(mime, { registry: registry })
                .wrap(uriTemplateInterceptor)
                .wrap(errorCode)
                .wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});