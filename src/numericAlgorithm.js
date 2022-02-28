module.exports = f = (
  collection,
  position,
  target,
  entries,
  operation = "+"
) => {
  if (target === 0) {
    if (entries.length) {
      const reducedTarget = entries.reduce((acc, curr) => acc + curr);
      return `${reducedTarget} = ${entries.join(" ")}`;
    }
    return entries;
  }

  if (position >= collection.length) {
    return entries;
  }

  return []
    .concat(
      ...[
        f(
          collection,
          position + 1,
          target,
          [...entries, collection[position]],
          operation
        ),
      ],
      ...[
        f(
          collection,
          position + 1,
          target - collection[position],
          [...entries, collection[position]],
          "-"
        ),
      ],
      ...[
        f(
          collection,
          position + 1,
          target + collection[position],
          [...entries, collection[position]],
          "+"
        ),
      ]
    )
    .filter((a) => a.length);
};
