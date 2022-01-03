import { ClassNames } from '@emotion/react';

// this might be a component from npm that accepts a wrapperClassName prop
let SomeComponent = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

function EmotionComponentAdvanced() {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <SomeComponent
          wrapperClassName={css({ color: 'green' })}
          className={css`
            color: hotpink;
          `}
        >
          from children!!
        </SomeComponent>
      )}
    </ClassNames>
  );
}

export default EmotionComponentAdvanced;
