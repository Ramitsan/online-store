import React from "react";

type FilterRangeProps = {
  onChange: (data: {min: string, max: string}) => void;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}

export default function FilterRange({ onChange, minValue, maxValue, onMinChange, onMaxChange }: FilterRangeProps) {
  const maxLimit = 2000;
  const minLimit = 0;

  const left = (+minValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const right = (1 - (+maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';
  const leftReverse = (+maxValue - minLimit) / (maxLimit - minLimit) * 100 + '%';
  const rightReverse = (1 - (+minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%';

  return (
    <div className="filter-range">
      <div className="filter-range__values">
        <div className="filter-range__field">
          <span>Min</span>
          <span className="filter-range__value filter-range__value--min">{+minValue > +maxValue ? maxValue : minValue}</span>
        </div>

        <div className="filter-range__separator"> - </div>

        <div className="filter-range__field">
          <span>Max</span>
          <span className="filter-range__value filter-range__value--max">{+maxValue < +minValue ? minValue : maxValue}</span>
        </div>
      </div>

      <div className="filter-range__slider">
        <div className="filter-range__progress" style={{
          left: +minValue > +maxValue ? leftReverse : left,
          right: +minValue > +maxValue ? rightReverse : right
        }}></div>
      </div>

      <div className="filter-range__container">
        <input type="range" className="filter-range__input filter-range__input--min" min={minLimit} max={maxLimit} value={minValue}
          onChange={(e) => {
            onMinChange(e.target.value);
            onChange({min: e.target.value, max: maxValue});
          }} />
        <input type="range" className="filter-range__input filter-range__input--max" min={minLimit} max={maxLimit} value={maxValue}
          onChange={(e) => {
            onMaxChange(e.target.value);
            onChange({min: minValue, max: e.target.value});
          }} />
      </div>
    </div>
  )
}