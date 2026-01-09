import { Component } from 'react';
import { Text } from 'react-native';

// Waqf color map
const WAQF_COLORS = {
  '۝': '#2e7d32', // Ayah end – green
  'مـ': '#d32f2f', // Waqf Lazim – red
  'ط': '#f57c00', // Waqf Mutlaq – orange
  'ج': '#1976d2', // Waqf Jaiz – blue
  'لا': '#c62828', // No stop – dark red
  'صل': '#6a1b9a', // Continue – purple
  'قلى': '#ad1457', // Stop preferred
  '∴': '#00838f', // Mu'anaka
};

export default class StyledQuranText extends Component {
  // Function to parse text and split into parts for rendering
  parseText = (text) => {
    if (!text) return [];

    // Regex to detect:
    // 1. <b>bold</b>
    // 2. <color name="red">text</color>
    // 3. Waqf symbols
    const regex = /(<b>(.*?)<\/b>)|(<color name="(.*?)">(.*?)<\/color>)|([۝مـطجلاصلقلى∴])/g;

    const parts = [];
    let lastIndex = 0;

    let match;
    while ((match = regex.exec(text)) !== null) {
      // Push text before match
      if (match.index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, match.index) });
      }

      if (match[2]) {
        // <b>bold</b>
        parts.push({ text: match[2], bold: true });
      } else if (match[5]) {
        // <color name="red">text</color>
        parts.push({ text: match[5], color: match[4] });
      } else if (match[6]) {
        // Waqf symbols
        const waqfColor = WAQF_COLORS[match[6]] || '#000';
        parts.push({ text: match[6], color: waqfColor, bold: true });
      }

      lastIndex = regex.lastIndex;
    }

    // Push remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex) });
    }

    return parts;
  };

  render() {
    const { text, style } = this.props;

    const parsedParts = this.parseText(text);

    return (
      <Text
        style={[
          style
        ]}
      >
        {parsedParts.map((part, index) => (
          <Text
            key={index}
            style={{
              color: part.color || style?.color || '#000',
              fontWeight: part.bold ? 'bold' : 'normal',
            }}
          >
            {part.text}
          </Text>
        ))}
      </Text>
    );
  }
}