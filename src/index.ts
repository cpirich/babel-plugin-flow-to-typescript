import {buildPlugin} from './plugin';
import {ImportDeclaration} from './visitors/import_declaration';
import {TypeAnnotation} from './visitors/type_annotation';
import {TypeCastExpression} from './visitors/type_cast_expression';
import {TypeParameterDeclaration} from './visitors/type_parameter_declaration';

export = buildPlugin([
    TypeAnnotation,
    TypeParameterDeclaration,
    ImportDeclaration,
    TypeCastExpression
]);