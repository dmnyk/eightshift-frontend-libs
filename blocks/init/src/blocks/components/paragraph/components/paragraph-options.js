import React from 'react'; // eslint-disable-line no-unused-vars
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ColorPaletteCustom } from '@eightshift/frontend-libs';
import { SelectControl, Icon } from '@wordpress/components';
import globalSettings from './../../../manifest.json';

export const ParagraphOptions = (props) => {
  const {
    paragraph: {
      styleColor,
      styleSize,
      removeStyle,
    },
    onChangeStyleColor,
    onChangeStyleSize,
  } = props;

  return (
    <Fragment>
      {removeStyle !== true &&
        <Fragment>

          {onChangeStyleColor &&
            <ColorPaletteCustom
              label={
                <Fragment>
                  <Icon icon={() => <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18.8341675.92971801c.3770446 0 .6835937.3065491.6835937.68359375v11.47888184c0 .1617432-.131073.2929687-.2929687.2929687-.1617432 0-.2929688-.1312255-.2929688-.2929687v-11.47888184c0-.05386352-.0437927-.09765625-.0976562-.09765625h-2.2802734c-.1618958 0-.2929688-.13122559-.2929688-.29296875 0-.16189574.131073-.29296875.2929688-.29296875zm.390625 13.14529419c.1618957 0 .2931213.131073.2931213.2929687v3.9518738c0 .9265137-.7536316 1.6801453-1.6801452 1.6801453-.9263611 0-1.6799927-.7536316-1.6799927-1.6801453v-6.516571c0-.6033325-.4908753-1.0940552-1.0940552-1.0940552-.6033325 0-1.0942078.4908753-1.0942078 1.0940552v1.9816589c0 .9263611-.7536316 1.6799927-1.6799926 1.6799927-.9263611 0-1.6801453-.7536316-1.6801453-1.6799927v-1.1689758c-.0125122.0006103-.0250244.0018311-.0376892.0018311-.211792 0-.4107666-.0823975-.5604553-.2322388l-2.06146245-2.0614624c-.88409422.9051513-1.68792723 1.9673156-2.39044188 3.1605529-.10421754.1773072-.22644043.3549195-.36315918.5279542-.05783082.0732421-.14358519.1113891-.23010254.1113891-.06362914 0-.12771605-.0205993-.18142699-.0630188-.12695312-.1002502-.14862062-.2845764-.04837035-.4115295.12023922-.1521301.22720336-.3076172.31814574-.4620362.72769164-1.2359619 1.56188965-2.3374939 2.48092653-3.27758785l-.72525028-.72509766c-.9399414.91888431-2.0414734 1.75323491-3.27743527 2.48092651-.30426028.1789856-.59570313.4071045-.86624149.6776428-.48278808.4827881-.83206175 1.0348511-.98342894 1.5545655-.13168336.4522705-.09155274.8271789.11016848 1.0290527.3701782.3700256 1.24649046.1849365 2.08404539-.4400635.12954711-.0968933.31311035-.0701904.41000367.0595093.0967407.1295471.07003781.3131104-.0595093.4100036-.65811156.4911805-1.32949828.7450867-1.89102172.7452393-.38360594 0-.7157898-.1184082-.95779418-.3604126-.36285402-.362854-.45455933-.9336853-.2584839-1.6072082.17852785-.612793.58044433-1.2538147 1.13159179-1.8051148.30563356-.3054809.6364441-.5639648.98342895-.76828 1.19308472-.7023621 2.25524906-1.50619506 3.16040039-2.39028932l-2.06146238-2.06161496c-.30899047-.30899051-.30899047-.81176758 0-1.12075809l1.55441285-1.55456543c.14968871-.14968871.3488159-.23208617.56045531-.23208617.06561281 0 .12954711.00885008.19149781.02410891l3.59375004-3.59359742c.3089904-.30899047.8117675-.30899047 1.1209106 0l.6977844.69793699h3.2247925c.1618957 0 .2929688.13107301.2929688.29296875 0 .16174316-.1310731.29296875-.2929688.29296875h-2.638855l3.8491822 3.84902957c.3089904.30899047.3089904.81192015 0 1.12091062l-3.5940552 3.5940552c.0643921.2607727-.0041199.5480957-.2076722.7514954l-1.4912414 1.491394v1.4624023c0 .6033326.4908752 1.0940552 1.0942078 1.0940552.6031799 0 1.0940551-.4907226 1.0940551-1.0940552v-1.9816589c0-.9263611.7536316-1.6799927 1.6799927-1.6799927s1.6801453.7536316 1.6801453 1.6799927v6.516571c0 .6033326.4907226 1.0942078 1.0940552 1.0942078.6033325 0 1.0940552-.4908752 1.0940552-1.0942078v-3.9518738c0-.1618957.1312255-.2929687.2929687-.2929687zm-8.5760498-13.42895509-3.51318364 3.51318359.42099.42099 2.33657836-2.33642578c.11428838-.1144409.29983528-.1144409.41427618 0 .1144409.11444094.1144409.29983524 0 .41442871l-2.33642583 2.33642578.31570434.31570434.59371949-.59356687c.11428832-.11444094.2998352-.11428833.41427613 0 .11444094.11444093.11444094.29998781 0 .41427613l-.59371949.59356687 2.07489016 2.07489016.5937195-.59356691c.1142883-.11428833.2998352-.11428833.4142761 0 .1144409.11444093.1144409.29983523 0 .41442871l-.5935669.59356691 1.3703918 1.37039184 3.5131836-3.5131836c.0805664-.08041383.0805664-.21163941 0-.29205324l-5.132904-5.13305664c-.0805664-.08056641-.2116394-.08056641-.2922058 0zm-.2230835 11.32522589c.0390625.0390625.0907898.0605774.1460266.0605774s.1071167-.0215149.1461792-.0605774l1.5544128-1.5544129c.0805664-.0805664.0805664-.2116394 0-.2922058l-5.67687983-5.67687989c-.0390625-.0390625-.09094242-.06057738-.14617922-.06057738-.05508422 0-.1069641.02151488-.1460266.06057738l-1.55456543 1.55441286c-.08056641.0805664-.08056641.21163941 0 .29220582zm-3.63372803-5.14236456 3.09921262 3.09921265c.11444091.11444091.11444091.29983521 0 .41442871-.05722043.0570679-.13214109.0857544-.20706176.0857544-.07507324 0-.1499939-.0286865-.20721437-.0857544l-3.09936524-3.09936523c-.1144409-.1144409-.1144409-.29983519 0-.41427613.11444094-.1144409.29998781-.1144409.41442875 0zm10.77133173.29129031c.1618958 0 .2929688.13107297.2929688.29296875 0 .16189574-.131073.29296875-.2929688.29296875-.1618957 0-.2944946-.13107301-.2944946-.29296875 0-.16189578.1295471-.29296875.2914429-.29296875zm.2413941.80078125h.0030518.0036621c.1602172 0 .290985.12878418.2929687.28930664.0019836.16174316-.1275635.29449461-.2893066.29663086h-.0038147c-.1600647 0-.2923585-.12878418-.2943421-.28930664-.0019836-.16174316.1258851-.29449465.2877808-.29663086zm-1.8183899.90255734h.0030517c.1618958 0 .2929688.13107301.2929688.29296875 0 .16174321-.131073.29296875-.2929688.29296875-.1618957 0-.2944946-.13122554-.2944946-.29296875 0-.16189574.1295471-.29296875.2914429-.29296875z" /></svg>} />
                  {__('Paragraph Color', 'eightshift-boilerplate')}
                </Fragment>
              }
              help={__('Change Paragraph color.', 'eightshift-boilerplate')}
              colors={[
                globalSettings.colors.primary,
                globalSettings.colors.black,
              ]}
              value={styleColor}
              onChange={onChangeStyleColor}
            />
          }

          {onChangeStyleSize &&
            <SelectControl
              label={__('Paragraph Font Size', 'eightshift-boilerplate')}
              value={styleSize}
              options={[
                { label: __('Default (22px)', 'eightshift-boilerplate'), value: 'default' },
                { label: __('Small (18px)', 'eightshift-boilerplate'), value: 'small' },
              ]}
              onChange={onChangeStyleSize}
            />
          }

        </Fragment>
      }
    </Fragment>
  );
};

