import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress} style={{ padding: 10 }}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map())};

  _keyExtractor = (item, index) => item.id.toString();

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[{ height: 1, backgroundColor: 'yellow' }, highlighted && {marginLeft: 0}]} />
          )}
      />
    );
  }
}

MultiSelectList.defaultProps = {
  data: [
    { id: 1524600360250, title: 'treci' },
    { id: 1524600360251, title: 'drugi' },
    { id: 1524600360252, title: 'prvi' },
    { id: 1524600360253, title: 'cetvrti' },
    { id: 1524600360254, title: 'sesti' },
    { id: 1524600360255, title: 'peti' },
    { id: 1524600360256, title: 'sedmi' },
  ]
};

export default MultiSelectList;