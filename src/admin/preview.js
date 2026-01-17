// Custom Preview für Texte mit korrekten Zeilenumbrüchen
CMS.registerPreviewTemplate('texte', createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const body = entry.getIn(['data', 'body']);
    const type = entry.getIn(['data', 'type']);
    const excerpt = entry.getIn(['data', 'excerpt']);
    const date = entry.getIn(['data', 'date']);
    
    // Konvertiere Markdown zu HTML mit Zeilenumbrüchen
    const bodyHTML = body ? body
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>') // Einzelne Zeilenumbrüche zu <br>
      .replace(/<br><br>/g, '</p><p>') // Doppelte werden zu Paragraphen
      : '';
    
    return h('div', {className: 'preview'},
      h('h1', {}, title),
      h('div', {className: 'meta'}, 
        h('span', {}, type),
        date ? h('span', {}, ' • ' + new Date(date).toLocaleDateString('de-DE')) : null
      ),
      excerpt ? h('p', {className: 'excerpt', style: {fontStyle: 'italic', marginTop: '1em'}}, excerpt) : null,
      h('div', {
        className: 'content',
        style: {marginTop: '2em', lineHeight: '1.6'},
        dangerouslySetInnerHTML: {__html: '<p>' + bodyHTML + '</p>'}
      })
    );
  }
}));

// Hilfsfunktion für React-Komponenten
var createClass = CMS.createClass || React.createClass;
var h = CMS.h || React.createElement;
