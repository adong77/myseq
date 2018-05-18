import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import SourceContext from './contexts/SourceContext';
import SettingsContext, { defaultSettings, settingsProps } from './contexts/SettingsContext';
import SourceRoute from './components/SourceRoute';
import Navigation from './components/Navigation';
import LoadVcfFile from './components/LoadVcfFile';
import VariantQuery from './components/query/VariantQuery';
import Traits from './components/traits/Traits';

class MySeq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: null,
      samples: [],
      settings: Object.assign({}, defaultSettings, props.settings),
    };

    this.setSource = this.setSource.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
  }

  setSource(source) {
    this.setState({ source });
    source.samples().then((samples) => {
      this.setState({ samples });
      this.updateSettings({ sample: samples[0] });
    });
  }

  updateSettings(settings) {
    this.setState({ settings: Object.assign({}, this.state.settings, settings) });
  }

  render() {
    const { source, samples, settings } = this.state;

    return (
      <SettingsContext.Provider value={settings}>
        <SourceContext.Provider value={source}>
          <BrowserRouter>
            <main>
              <Navigation
                samples={samples}
                settings={settings}
                updateSettings={this.updateSettings}
              />
              <Container fluid>
                <Switch>
                  <SourceRoute path="/" exact component={VariantQuery} />
                  <Route
                    path="/load"
                    exact
                    render={renderProps =>
                      <LoadVcfFile {...renderProps} setSource={this.setSource} />
                    }
                  />
                  <SourceRoute path="/query" exact component={VariantQuery} />
                  <Route path="/traits" component={Traits} />
                </Switch>
              </Container>
            </main>
          </BrowserRouter>
        </SourceContext.Provider>
      </SettingsContext.Provider>
    );
  }
}

MySeq.propTypes = {
  settings: settingsProps,
};

MySeq.defaultProps = {
  settings: {},
};

export default MySeq;
