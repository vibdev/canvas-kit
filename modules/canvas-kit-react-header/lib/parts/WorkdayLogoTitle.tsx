import * as React from 'react';
import {css, cx} from 'emotion';
import {HeaderTheme, HeaderThemePropType} from '@workday/canvas-kit-react-header/lib/shared/types';
import {
  logoTitleStyle,
  verticalCenterStyle,
} from '@workday/canvas-kit-react-header/lib/shared/styles';
import {colors} from '@workday/canvas-kit-react-core';
import * as chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  title: string;
} & Partial<HeaderThemePropType>;

export const logoSvg = ``;

function _makeLogo(color: string) {
  return `
    <svg width="120px" height="48px" viewBox="0 0 120 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <g id="Graphics/Logo/Workday/Blue" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Logo/workday/blue"> <path d="M34.9041268,22.0597029 C39.5110202,11.3107886 50.2489798,3.78994286 62.7534986,3.78994286 C75.2579827,3.78994286 85.9959424,11.3107886 90.6028703,22.0597029 C90.8799424,22.7808686 91.5727262,23.2960114 92.4040461,23.2960114 C93.4432046,23.2960114 94.3091758,22.4374629 94.3091758,21.4072114 C94.3091758,21.1668343 94.2745245,20.9264229 94.1706398,20.6860457 C88.9748473,8.59779429 76.8513545,0.115405714 62.7534986,0.115405714 C48.6556081,0.115405714 36.5321153,8.59779429 31.3363573,20.6860457 C31.232438,20.8921029 31.1977867,21.1668343 31.1977867,21.4072114 C31.1977867,22.4374629 32.0637579,23.2960114 33.1029164,23.2960114 C33.9342363,23.2960114 34.6269856,22.7808686 34.9041268,22.0597029 Z" id="Fill-1" fill="#F58C00"></path> <path d="M17.7580427,41.6000811 C17.6541268,41.9091531 17.4116576,42.1152034 16.9613533,42.1152034 L14.4327424,42.1152034 C14.017079,42.1152034 13.8092473,42.0121783 13.7053314,41.6000811 L11.3152738,32.7055886 C11.0728046,31.81272 10.9688888,30.7481486 10.8303354,29.7178971 C10.7264196,30.7824686 10.5878663,31.8470743 10.3453937,32.7055886 L7.88606455,41.6000811 C7.81678617,41.9091531 7.53967954,42.1152034 7.08937867,42.1152034 L4.5261268,42.1152034 C4.1104634,42.1152034 3.90263516,42.0121783 3.79871931,41.6000811 L0.265590778,28.79064 C0.161674928,28.3442057 0.438781556,28.1038286 0.819804035,28.1038286 L2.44781671,28.1038286 C2.89811758,28.1038286 3.14058674,28.2411771 3.24450259,28.6876457 L5.46136945,37.8225017 C5.70383862,38.8527497 5.77311354,39.9516823 5.87702939,40.9475931 C6.05022363,39.9860263 6.18877695,38.8527497 6.46588703,37.8568457 L8.9252196,28.6532914 C9.0291389,28.2755314 9.340883,28.1038286 9.7565464,28.1038286 L11.7655816,28.1038286 C12.1812415,28.1038286 12.5276265,28.3098857 12.6315458,28.6876457 L15.1255159,37.8568423 C15.4026259,38.8527463 15.5411793,39.9516823 15.6797326,40.9475863 C15.8182893,39.9860194 15.9568427,38.8527463 16.1646744,37.8568423 L18.208347,28.6532914 C18.2776219,28.2755314 18.6240069,28.1038286 19.0396703,28.1038286 L20.563781,28.1038286 C20.9448069,28.1038286 21.2219135,28.3442057 21.1179942,28.79064 L17.7580427,41.6000811 Z M31.3709741,42.2525691 C27.3182594,42.2525691 24.6857291,39.5052411 24.6857291,35.0064686 C24.6857291,30.5420914 27.3182594,27.8634171 31.3709741,27.8634171 C35.4236888,27.8634171 37.986951,30.5764114 37.986951,35.0064686 C37.986951,39.5052411 35.4236888,42.2525691 31.3709741,42.2525691 Z M31.3017061,29.8208914 C28.9116311,29.8208914 27.5607493,31.5379886 27.5607493,35.0408229 C27.5607493,38.6123554 28.8770144,40.3637794 31.3017061,40.3637794 C33.6917464,40.3637794 35.0426628,38.6466994 35.0426628,35.0408229 C35.0080115,31.5379886 33.6917464,29.8208914 31.3017061,29.8208914 Z M50.9763804,30.0613029 C50.8724611,30.4733829 50.5607378,30.7137943 49.9718732,30.5764114 C49.486928,30.4733829 48.6902594,30.26736 48.0321268,30.26736 C47.027585,30.26736 45.6767032,31.4006057 45.6767032,33.9418971 L45.6767032,41.5313966 C45.6767032,41.840472 45.3302939,42.1152034 44.949268,42.1152034 L43.6330029,42.1152034 C43.2519769,42.1152034 42.9056023,41.840472 42.9056023,41.5313966 L42.9056023,28.6876457 C42.9056023,28.3442057 43.2519769,28.1038286 43.6330029,28.1038286 L44.4297061,28.1038286 C44.7760807,28.1038286 45.0531873,28.2411771 45.1571066,28.5502629 L45.6420519,30.1299771 C46.6119424,28.75632 47.9282075,27.8977714 49.556196,27.8977714 C50.6646225,27.8977714 51.5305937,28.3442057 51.3574063,28.9280229 L50.9763804,30.0613029 Z M82.7745476,41.9778411 L82.047147,41.9778411 C81.5275504,41.9778411 81.2504438,41.8061314 81.1465245,41.3940343 L80.8694179,40.2264206 C79.8649107,41.6344286 78.6179135,42.2182354 76.7820865,42.2182354 C73.1796657,42.2182354 71.3091873,39.7799794 71.3091873,35.0751771 C71.3091873,32.19048 71.7941326,30.7824686 72.9718617,29.4431657 C73.8724496,28.4129143 75.361902,27.8634514 76.8860058,27.8634514 C78.5832968,27.8634514 79.8649107,28.5502629 80.8001499,29.92392 L80.8001499,22.0253486 C80.8001499,21.6819429 81.1465245,21.4415657 81.5275504,21.4415657 L82.7745476,21.4415657 C83.1555735,21.4415657 83.5019481,21.6819429 83.5019481,22.0253486 L83.5019481,41.3940377 C83.5019481,41.7374434 83.1555735,41.9778411 82.7745476,41.9778411 Z M77.4748703,29.7865714 C76.4357118,29.7865714 75.6390086,30.1643314 75.1540634,30.9198514 C74.6691182,31.6753371 74.2880922,32.9116457 74.2880922,35.0408229 C74.2880922,38.7497314 75.2579827,40.2951017 77.440219,40.2951017 C79.6917233,40.2951017 80.8348012,38.6123657 80.8348012,35.1095314 C80.8694179,31.6410171 79.6224553,29.7865714 77.4748703,29.7865714 Z M66.9447493,42.1152034 L64.831781,42.1152034 C64.4854063,42.1152034 64.2082997,41.9091531 64.0004611,41.6344251 L58.6314813,34.86912 L58.6314813,41.5313966 C58.6314813,41.840472 58.2851066,42.1152034 57.9040807,42.1152034 L56.6570836,42.1152034 C56.2760576,42.1152034 55.929683,41.840472 55.929683,41.5313966 L55.929683,22.0940571 C55.929683,21.7506171 56.2760576,21.51024 56.6570836,21.51024 L57.9040807,21.51024 C58.2851066,21.51024 58.6314813,21.7506171 58.6314813,22.0940571 L58.6314813,34.5943886 L64.1390317,28.5159429 C64.312219,28.2755314 64.5893256,28.0694743 65.0396196,28.0694743 L66.910098,28.0694743 C67.3950432,28.0694743 67.5682305,28.4815886 67.2911239,28.75632 L61.4025821,34.5943886 L67.2911239,41.3596903 C67.5682305,41.7031063 67.4296945,42.1152034 66.9447493,42.1152034 Z M104.007977,28.6876457 C103.869406,28.37856 104.215816,28.1038286 104.631458,28.1038286 L106.259481,28.1038286 C106.709775,28.1038286 107.021533,28.3098857 107.160069,28.6876457 L110.416081,37.1700069 C110.554651,37.5821074 110.693187,38.1659143 110.797107,38.6466994 C110.901026,38.2002583 111.143516,37.3760606 111.385971,36.6548846 L113.98385,28.6876457 C114.087769,28.3098857 114.434179,28.1381486 114.884473,28.1381486 L116.477844,28.1381486 C116.893522,28.1381486 117.205245,28.41288 117.101326,28.7219657 L111.697729,44.1070149 C111.143516,45.6867326 110.069706,46.9230274 108.233879,47.6098594 L107.471827,47.8845943 C107.160069,47.9876194 106.709775,47.9189349 106.501937,47.6442034 L105.982375,46.8543429 C105.843804,46.6139554 106.016991,46.1675109 106.363401,46.0644857 L106.917614,45.8584354 C108.303147,45.3776537 109.307654,43.8666206 109.723331,41.9778309 L104.007977,28.6876457 Z M94.6902017,27.8634171 C98.7429164,27.8634171 100.821233,30.5420914 100.786582,35.0064686 L100.786582,41.428368 C100.786582,41.73744 100.440207,42.0121749 100.059182,42.0121749 L99.3317464,42.0121749 C98.8121844,42.0121749 98.5350778,41.8404651 98.4311585,41.428368 L98.1540519,40.2264103 C97.1495447,41.6687589 96.1103862,42.2182251 94.4823631,42.2182251 C90.706755,42.2182251 88.2820634,39.5395817 88.2820634,35.0408229 C88.2820634,30.5764114 90.637487,27.8634171 94.6902017,27.8634171 Z M94.6209337,40.2607577 C97.0109741,40.2607577 98.1540519,38.6123589 98.1540519,35.0065029 C98.1540519,31.5036343 97.0109741,29.7865714 94.6209337,29.7865714 C92.2308588,29.7865714 91.1917003,31.5036343 91.1917003,35.0065029 C91.1917003,38.6123589 92.2308588,40.2607577 94.6209337,40.2607577 Z M118.838386,38.5045714 C119.069395,38.6009143 119.276888,38.7428571 119.459135,38.9228571 C119.632046,39.0977143 119.767608,39.3010286 119.856484,39.5225143 C119.949856,39.7515429 119.996542,39.9888 119.996542,40.2421714 C119.996542,40.5006857 119.949856,40.7376 119.850605,40.9669714 C119.757233,41.1987429 119.620634,41.3941714 119.438386,41.5717714 C119.256138,41.7469714 119.047608,41.8824 118.817983,41.9801143 C118.588703,42.0740571 118.347666,42.1203429 118.097983,42.1203429 C117.846571,42.1203429 117.602421,42.0685714 117.37245,41.976 C117.142478,41.8772571 116.933256,41.7315429 116.752046,41.5515429 C116.574294,41.3749714 116.444265,41.1726857 116.350893,40.9512 C116.255447,40.7221714 116.207723,40.4907429 116.207723,40.2421714 C116.207723,40.0707429 116.234006,39.9061714 116.276888,39.7388571 C116.323573,39.5790857 116.391009,39.4196571 116.485418,39.264 C116.658329,38.9794286 116.882767,38.7579429 117.163228,38.5971429 C117.446455,38.4363429 117.757695,38.3588571 118.097983,38.3588571 C118.357695,38.3588571 118.604611,38.4054857 118.838386,38.5045714 Z M117.502478,38.784 C117.31366,38.8556571 117.148357,38.9701714 117.002421,39.1145143 C116.84438,39.264 116.731297,39.4402286 116.646225,39.6356571 C116.563919,39.8290286 116.522075,40.0296 116.522075,40.2370286 C116.522075,40.4444571 116.558386,40.6450286 116.63585,40.8315429 C116.714352,41.0184 116.82951,41.1881143 116.976138,41.3328 C117.126571,41.4843429 117.299827,41.6029714 117.493141,41.6852571 C117.685764,41.7672 117.887723,41.8086857 118.097983,41.8086857 C118.30098,41.8086857 118.499135,41.7672 118.69245,41.6904 C118.885072,41.6129143 119.062824,41.4997714 119.219827,41.3492571 C119.365418,41.2104 119.479539,41.0441143 119.562882,40.8534857 C119.643112,40.6666286 119.684265,40.4698286 119.684265,40.2678857 C119.684265,40.0453714 119.646916,39.8389714 119.569452,39.6486857 C119.495447,39.4608 119.380634,39.2893714 119.235735,39.1402286 C119.078732,38.9845714 118.911354,38.8659429 118.718732,38.7877714 C118.527147,38.7102857 118.321383,38.6681143 118.103516,38.6681143 C117.887723,38.6681143 117.685764,38.7065143 117.502478,38.784 Z M118.140173,39.1597714 C118.435504,39.1597714 118.661671,39.2125714 118.812104,39.3113143 C118.962536,39.4145143 119.035504,39.5588571 119.035504,39.7621714 C119.035504,39.9013714 118.995389,40.0141714 118.91585,40.1118857 C118.832853,40.2113143 118.718732,40.2785143 118.577637,40.3141714 L119.047608,41.2460571 L118.478386,41.2460571 L118.077579,40.3930286 L117.826859,40.3930286 L117.826859,41.2460571 L117.31366,41.2460571 L117.31366,39.1597714 L118.140173,39.1597714 Z M117.826859,40.0865143 L118.077579,40.0865143 C118.228012,40.0865143 118.337291,40.0604571 118.405418,40.0141714 C118.47389,39.9678857 118.510202,39.8962286 118.510202,39.7926857 C118.510202,39.6884571 118.47389,39.6102857 118.400922,39.5588571 C118.321383,39.5074286 118.207262,39.4813714 118.051297,39.4813714 L117.826859,39.4813714 L117.826859,40.0865143 Z" id="Combined-Shape" fill=${color}></path> </g> </g></svg>`;
}

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    mode: 'primary',
  };

  render() {
    const logoStyle = css({
      padding: '0 32px',
      marginRight: '24px',
      borderRight: this.props.title.length
        ? `1px solid ${
            this.props.theme === HeaderTheme.white
              ? colors.soap400
              : chroma(colors.soap400)
                  .alpha(0.4)
                  .css()
          }`
        : 'none',
    });

    const titleColor = css({
      color: this.props.theme === HeaderTheme.white ? colors.blueberry500 : colors.frenchVanilla100,
    });

    return (
      <span className={verticalCenterStyle}>
        <span
          className={logoStyle}
          dangerouslySetInnerHTML={{
            __html:
              this.props.theme === HeaderTheme.white
                ? _makeLogo(colors.blueberry500)
                : _makeLogo(colors.frenchVanilla100),
          }}
        />
        <h3 className={cx(logoTitleStyle, titleColor)}>{this.props.title}</h3>
      </span>
    );
  }
}
