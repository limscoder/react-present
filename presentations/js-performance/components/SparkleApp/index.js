import React from 'react';
import ReactDOM from 'react-dom';
import glamorous from 'glamorous';
import ParticleCloud from './ParticleCloud';
import { initOptimized } from './initialize';

const SparkleButton = glamorous.button({
  fontSize: '32px',
  backgroundColor: '#FF80E1',
  borderRadius: '4px',
  width: '100%',
  zIndex: 100
});

function sparkle(audio, particleCloud) {
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  if (particleCloud) {
    particleCloud.animate();
  }
}

export default class SparkleApp extends React.Component {
  static defaultProps = {
    initResources: initOptimized
  };

  constructor(props) {
    super(props);

    this.canvasRef = this.canvasRef.bind(this);
    this.onSparkleClick = this.onSparkleClick.bind(this);
  }

  componentDidMount() {
    this.props.initResources().then(resources => {
      // support different methods of audio initialization for demo purposes.
      if (resources.idleAudio) {
        const idleCallback = requestIdleCallback || requestAnimationFrame;
        idleCallback(() => {
          resources.idleAudio().then(audio => {
            this.audio = audio;
          });
        });
      } else if (resources.lazyAudio) {
        this.lazyAudio = resources.lazyAudio;
      } else if (resources.audio) {
        this.audio = resources.audio;
      }

      this.particleCloud = new ParticleCloud(
        this.canvas,
        resources.bitmap,
        resources.longFrame || false);
    });
  }

  componentWillUnmount() {
    if (this.particleCloud) {
      this.particleCloud.end();
      this.particleCloud = null;
    }

    if (this.audio) {
      this.audio = null;
    }
  }

  render() {
    return (
      <div>
        <canvas ref={ this.canvasRef } height="500px" width="600px" />
        <SparkleButton onClick={ this.onSparkleClick }
                       onKeyDown={ this.onSparkleClick }>
          Sparkle!
        </SparkleButton>
      </div>
    );
  }

  canvasRef(canvas) {
    this.canvas = canvas;
  }

  onSparkleClick(e) {
    e.stopPropagation();
    e.preventDefault();

    if (this.lazyAudio) {
      this.lazyAudio().then(audio => {
        sparkle(audio, this.particleCloud);
      });
    } else if (this.audio) {
      sparkle(this.audio, this.particleCloud);
    }
  }
}